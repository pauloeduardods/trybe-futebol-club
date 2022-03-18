import Password from '../utils/auth/Passwod';
import Jwt from '../utils/auth/JWT';
import UserModel from '../models/user.model';
import { ILoginResponse, IService, IServiceError, IUser } from '../interfaces';
import { loginSchema } from '../validations/user.validation';

class User {
  public static loginValidaion(email: string, password: string):
  IService<IServiceError> | void {
    const { error } = loginSchema.validate({ email, password });
    if (error) {
      return {
        statusCode: 'BadRequest',
        payload: { message: error.details[0].message },
      } as IService<IServiceError>;
    }
  }

  public static async login(email: string, password: string):
  Promise<IService<ILoginResponse | IServiceError>> {
    const user = await UserModel.getUserByEmail(email) as IUser;
    const errorResult = {
      statusCode: 'Unauthorized',
      payload: { message: 'Unauthorized' },
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
}

export default User;
