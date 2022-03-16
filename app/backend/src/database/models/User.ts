import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  public id: number;

  public userName: string;

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

  userName: {
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
