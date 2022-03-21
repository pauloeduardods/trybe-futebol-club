import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces';
import JsonWebToken from '../utils/auth/JWT';

class Auth {
  static async tokenValidation(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      const payload = await JsonWebToken.verifyToken(authorization as string);
      if (!payload as boolean) {
        return res.status(401).json({ message: 'Unauthorized' }).end();
      }
      req.user = payload as Omit<IUser, 'password'>;
      next();
    } catch (e) {
      console.error(e);
      next(e);
    }
  }
}

export default Auth;
