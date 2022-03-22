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

  public static matchValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
      const validation = await MatchService.matchValidation({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: inProgress ?? true });
      if (validation) {
        const { statusCode, payload } = validation;
        return res.status(HTTPStatusCode[statusCode]).json(payload).end();
      }
      next();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };

  public static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
      const match = await MatchService.create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress });
      return res.status(HTTPStatusCode[match.statusCode]).json(match.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
}

export default MatchContoller;