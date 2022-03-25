import { NextFunction, Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import { HTTPStatusCode } from '../utils';

class LeaderboardController {
  public static getLeaderboard = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderboard = await LeaderboardService.getLeaderboard();
      return res.status(HTTPStatusCode[leaderboard.statusCode]).json(leaderboard.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
}

export default LeaderboardController;
