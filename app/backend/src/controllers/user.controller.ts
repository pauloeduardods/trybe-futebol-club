import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import { HTTPStatusCode } from '../utils';

class User {
  public static loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const validation = UserService.loginValidaion(email, password);
    if (validation) {
      const { statusCode, payload } = validation;
      return res.status(HTTPStatusCode[statusCode]).json(payload).end();
    }
    next();
  };

  public static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const { statusCode, payload } = await UserService.login(email, password);
      return res.status(HTTPStatusCode[statusCode]).json(payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };

  public static tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      const validation = await UserService.tokenValidation(authorization as string);
      const { statusCode, payload } = validation;
      return res.status(HTTPStatusCode[statusCode]).send(payload).end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
}

export default User;
