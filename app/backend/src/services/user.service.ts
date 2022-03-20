import { ILoginResponse, IService, IServiceError, IUser } from '../interfaces';
import UserModel from '../models/user.model';
import Jwt from '../utils/auth/JWT';
import Password from '../utils/auth/Passwod';
import { loginSchema } from '../validations/user.validation';

class User {
  public static loginValidaion(email: string, password: string):
  IService<IServiceError> | void {
    const { error } = loginSchema.validate({ email, password });
    if (error?.details[0].type === 'string.empty') {
      return {
        statusCode: 'Unauthorized',
        payload: { message: 'All fields must be filled' },
      } as IService<IServiceError>;
    }
    if (error) {
      return {
        statusCode: 'Unauthorized',
        payload: { message: 'Incorrect email or password' },
      } as IService<IServiceError>;
    }
  }

  public static async login(email: string, password: string):
  Promise<IService<ILoginResponse | IServiceError>> {
    const user = await UserModel.getUserByEmail(email) as IUser;
    const errorResult = {
      statusCode: 'Unauthorized',
      payload: { message: 'Incorrect email or password' },
    } as IService<IServiceError>;
    if (!user) return errorResult;
    const isPasswordValid = await Password.compare(password, user.password);
    if (!isPasswordValid) return errorResult;
    const payload = { email: user.email, id: user.id, username: user.username, role: user.role };
    const token = await Jwt.generateToken(payload as Omit<IUser, 'password'>);
    return {
      statusCode: 'OK',
      payload: {
        token,
        user: { ...payload as Omit<IUser, 'password'> },
      },
    };
  }

  public static async tokenValidation(token: string):
  Promise<IService<IServiceError | string>> {
    const validation = await Jwt.verifyToken(token) as Omit<IUser, 'password'>;
    if (validation.role as string) {
      return {
        statusCode: 'OK',
        payload: validation.role,
      };
    }
    return {
      statusCode: 'Unauthorized',
      payload: { message: 'Invalid token' },
    };
  }
}

export default User;
