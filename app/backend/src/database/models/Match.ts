import { DataTypes, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  public id: number;

  public clubName: string;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  clubName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Match;
