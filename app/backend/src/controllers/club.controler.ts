import { NextFunction, Request, Response } from 'express';
import ClubService from '../services/club.service';
import { HTTPStatusCode } from '../utils';

class ClubController {
  public static getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const clubs = await ClubService.getAll();
      return res.status(HTTPStatusCode[clubs.statusCode]).json(clubs.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };

  public static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const club = await ClubService.getById(+req.params.id);
      return res.status(HTTPStatusCode[club.statusCode]).json(club.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
}

export default ClubController;
