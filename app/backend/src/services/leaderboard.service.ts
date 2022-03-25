import { ILeaderboard, IService, IServiceError, TeamType } from '../interfaces';
import LeaderboardModel from '../models/leaderboard.model';

class LeaderboardService {
  static async getLeaderboard(teamType?: TeamType):
  Promise<IService<ILeaderboard[] | IServiceError>> {
    const leaderboard = await LeaderboardModel.getLeaderboard(teamType);
    return {
      statusCode: 'OK',
      payload: leaderboard,
    };
  }
}

export default LeaderboardService;
