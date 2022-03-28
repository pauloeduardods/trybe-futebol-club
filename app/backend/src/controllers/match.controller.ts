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
      next(e);
    }
  };

  public static matchValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, homeGoals, awayTeamGoals, awayGoals, inProgress } = req.body;
      const match = {
        homeTeam,
        awayTeam,
        homeTeamGoals: +homeGoals || +homeTeamGoals || 0,
        awayTeamGoals: +awayGoals || +awayTeamGoals || 0,
        inProgress: inProgress ?? true,
      };
      const validation = await MatchService.matchValidation(match);
      if (validation) {
        const { statusCode, payload } = validation;
        return res.status(HTTPStatusCode[statusCode]).json(payload).end();
      }
      next();
    } catch (e) {
      next(e);
    }
  };

  public static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, homeGoals, awayTeamGoals, awayGoals, inProgress } = req.body;
      const match = {
        homeTeam,
        awayTeam,
        homeTeamGoals: +homeGoals || +homeTeamGoals || 0,
        awayTeamGoals: +awayGoals || +awayTeamGoals || 0,
        inProgress: inProgress ?? true,
      };
      const matchCreated = await MatchService.create(match);
      return res.status(HTTPStatusCode[matchCreated.statusCode]).json(matchCreated.payload).end();
    } catch (e) {
      next(e);
    }
  };

  public static finish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const match = await MatchService.finish(+id);
      return res.status(HTTPStatusCode[match.statusCode]).json(match.payload).end();
    } catch (e) {
      next(e);
    }
  };

  public static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { homeTeamGoals, homeGoals, awayTeamGoals, awayGoals, inProgress } = req.body;
      const match = {
        homeTeamGoals: +homeGoals || +homeTeamGoals,
        awayTeamGoals: +awayGoals || +awayTeamGoals,
        inProgress: inProgress ?? true,
      };
      const matchUpdated = await MatchService.update(+id, match);
      return res.status(HTTPStatusCode[matchUpdated.statusCode]).json(matchUpdated.payload).end();
    } catch (e) {
      next(e);
    }
  };
}

export default MatchContoller;
