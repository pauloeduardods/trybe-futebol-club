import { DataTypes, Model } from 'sequelize';
import { IUser } from '../../interfaces';
import db from '.';

class User extends Model implements IUser {
  public id: number;

  public email: string;

  public username: string;

  public password: string;

  public role: string;

  public createdAt: Date;

  public updatedAt: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default User;
