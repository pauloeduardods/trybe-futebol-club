import { IUser } from '../../interfaces';

declare global {
  namespace Express {
    export interface Request {
      user?: Omit<IUser, 'password'>;
    }
  }
}
