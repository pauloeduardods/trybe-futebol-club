import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/match.service';
import { HTTPStatusCode } from '../utils';

class MatchContoller {
  public static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { inProgress } = req.query;
      const inProgressResult = typeof inProgress === 'string' ? JSON.parse(inProgress) : inProgress;
      const matchs = await MatchService.getAll(inProgressResult as boolean | undefined);
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

  public static finish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const match = await MatchService.finish(+id);
      return res.status(HTTPStatusCode[match.statusCode]).json(match.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  }

}

export default MatchContoller;