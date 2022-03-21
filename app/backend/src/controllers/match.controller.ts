import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/match.service';
import { HTTPStatusCode } from '../utils';

class MatchContoller {
  public static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inProgress = req.query.inProgress === 'true';
      const matchs = await MatchService.getAll(inProgress);
      return res.status(HTTPStatusCode[matchs.statusCode]).json(matchs.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
}

export default MatchContoller;