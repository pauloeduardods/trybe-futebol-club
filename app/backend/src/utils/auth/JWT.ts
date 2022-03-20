import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';
import { IUser } from '../../interfaces';

function readJwtToken(): Promise<string> {
  return fs.readFile('./jwt.evaluation.key', 'utf8');
}

class JsonWebToken {
  public static async generateToken(payload: Omit<IUser, 'password'>): Promise<string> {
    const jwtToken = await readJwtToken();
    return jwt.sign(payload, jwtToken, { algorithm: 'HS256' });
  }

  public static async verifyToken(token: string): Promise<Omit<IUser, 'password'> | boolean> {
    try {
      const jwtToken = await readJwtToken();
      return jwt.verify(token, jwtToken, { algorithms: ['HS256'] }) as Omit<IUser, 'password'>;
    } catch (e) {
      return false;
    }
  }
}

export default JsonWebToken;
