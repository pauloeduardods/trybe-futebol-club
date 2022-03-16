import { DataTypes, Model } from 'sequelize';
import db from '.';
import Match from './Match';

class Club extends Model {
  public id: number;

  public clubName: string;
}

Club.init({
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

Club.hasMany(Match, { foreignKey: 'home_team', as: 'homeTeam' });
Club.hasMany(Match, { foreignKey: 'away_team', as: 'awayTeam' });
Match.belongsTo(Club);

export default Club;
