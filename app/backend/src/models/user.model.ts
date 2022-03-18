import { IUser } from '../interfaces';
import UserDB from '../database/models/User';

class User {
  public static getUserByEmail(email: string): Promise<IUser> {
    return UserDB.findOne({
      where: {
        email,
      },
    }) as unknown as Promise<IUser>;
  }
}

export default User;
