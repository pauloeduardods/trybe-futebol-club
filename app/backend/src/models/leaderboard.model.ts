import Club from '../database/models/Club';
import Match from '../database/models/Match';
import { ILeaderboard, IMatch, TeamType } from '../interfaces';

type TY = 'homeTeamGoals' | 'awayTeamGoals';

class LeaderboardModel {
  private static readonly initialLeaderboad: ILeaderboard = {
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };

  private static async getTeamsWithMatchs(): Promise<Club[]> {
    return Club.findAll({
      include: [
        {
          model: Match,
          as: 'awayTeam',
          where: {
            inProgress: false,
          },
        },
        {
          model: Match,
          as: 'homeTeam',
          where: {
            inProgress: false,
          },
        },
      ],
    });
  }

  private static reduceCallback = (acc: ILeaderboard, match: IMatch, team: TY, enemyTeam: TY) => {
    const newAcc = { ...acc };
    newAcc.totalGames += 1;
    if (match[team] > match[enemyTeam]) {
      newAcc.totalVictories += 1;
      newAcc.totalPoints += 3;
    }
    if (match[team] === match[enemyTeam]) {
      newAcc.totalDraws += 1;
      newAcc.totalPoints += 1;
    }
    if (match[team] < match[enemyTeam]) newAcc.totalLosses += 1;
    newAcc.goalsFavor += match[team];
    newAcc.goalsOwn += match[enemyTeam];
    newAcc.goalsBalance += match[team] - match[enemyTeam];
    newAcc.efficiency = Math.round((newAcc.totalPoints / (newAcc.totalGames * 3)) * 10000) / 100;
    return newAcc;
  };

  private static calc(matchs: Match[], teamType: TeamType) {
    const enemyTeam = teamType === 'home' ? 'awayTeamGoals' : 'homeTeamGoals';
    const team = teamType === 'home' ? 'homeTeamGoals' : 'awayTeamGoals';
    return matchs.reduce((acc, match) =>
      this.reduceCallback(acc, match, team, enemyTeam), this.initialLeaderboad);
  }

  private static sum(home: ILeaderboard, away: ILeaderboard): ILeaderboard {
    const totalPoints = home.totalPoints + away.totalPoints;
    const totalGames = home.totalGames + away.totalGames;
    const result = {
      name: '',
      totalPoints,
      totalGames,
      totalVictories: home.totalVictories + away.totalVictories,
      totalDraws: home.totalDraws + away.totalDraws,
      totalLosses: home.totalLosses + away.totalLosses,
      goalsFavor: home.goalsFavor + away.goalsFavor,
      goalsOwn: home.goalsOwn + away.goalsOwn,
      goalsBalance: home.goalsBalance + away.goalsBalance,
      efficiency:
        Math.round((totalPoints
          / (totalGames * 3)) * 10000) / 100,
    };
    return result;
  }

  private static sortLeaderboard(leaderboard: ILeaderboard[]): ILeaderboard[] {
    return leaderboard.sort((a, b) => {
      if (a.totalPoints !== b.totalPoints) return b.totalPoints - a.totalPoints;
      if (a.totalVictories !== b.totalVictories) return b.totalVictories - a.totalVictories;
      if (a.goalsBalance !== b.goalsBalance) return b.goalsBalance - a.goalsBalance;
      if (a.goalsFavor !== b.goalsFavor) return b.goalsFavor - a.goalsFavor;
      if (a.goalsOwn !== b.goalsOwn) return b.goalsOwn - a.goalsOwn;
      return 0;
    });
  }

  public static async getLeaderboard(teamType?: TeamType): Promise<ILeaderboard[]> {
    const teamsWithMatchs = await LeaderboardModel.getTeamsWithMatchs();
    const leaderboard = teamsWithMatchs.map((team) => {
      let result;
      if (teamType) {
        result = this.calc(team[`${teamType}Team`], teamType);
      } else {
        result = this.sum(
          this.calc(team.homeTeam, 'home'),
          this.calc(team.awayTeam, 'away'),
        );
      }
      result.name = team.clubName;
      return result;
    });
    return this.sortLeaderboard(leaderboard);
  }
}

export default LeaderboardModel;
