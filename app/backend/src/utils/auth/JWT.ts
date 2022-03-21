import * as jwt from 'jsonwebtoken';
import * as fs from 'fs/promises';
import { IUser } from '../../interfaces';

function readJwtToken(): Promise<string> {
  return fs.readFile('./jwt.evaluation.key', 'utf8');
}

const options: jwt.SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

class JsonWebToken {
  public static async generateToken(payload: Omit<IUser, 'password'>): Promise<string> {
    const jwtToken = await readJwtToken();
    return jwt.sign(payload, jwtToken, options);
  }

  public static async verifyToken(token: string): Promise<Omit<IUser, 'password'> | boolean> {
    try {
      const jwtToken = await readJwtToken();
      return jwt.verify(token, jwtToken, options) as Omit<IUser, 'password'>;
    } catch (e) {
      return false;
    }
  }
}

export default JsonWebToken;
