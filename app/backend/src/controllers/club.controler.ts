import { Request, Response, NextFunction } from 'express';
import { HTTPStatusCode } from '../utils';
import ClubService from '../services/club.service';

class ClubController {
  public static getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const clubs = await ClubService.getAll();
      if (!clubs) {
        return res.status(HTTPStatusCode.NotFound).json({ message: 'No clubs found' }).end();
      }
      return res.status(HTTPStatusCode[clubs.statusCode]).json(clubs.payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
}

export default ClubController;
