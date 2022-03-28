import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import { HTTPStatusCode } from '../utils';

class LeaderboardController {
  public static getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard();
      return res.status(HTTPStatusCode[leaderboard.statusCode]).json(leaderboard.payload).end();
    } catch (e) {
      next(e);
    }
  };

  public static getHome = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard('home');
      return res.status(HTTPStatusCode[leaderboard.statusCode]).json(leaderboard.payload).end();
    } catch (e) {
      next(e);
    }
  };

  public static getAway = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard('away');
      return res.status(HTTPStatusCode[leaderboard.statusCode]).json(leaderboard.payload).end();
    } catch (e) {
      next(e);
    }
  };
}

export default LeaderboardController;
