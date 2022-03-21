import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IClub } from '../../interfaces';
import Match from './Match';

class Club extends Model implements IClub{
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

Match.belongsTo(Club, { foreignKey: 'home_team', targetKey: 'id', as: 'homeClub' });
Match.belongsTo(Club, { foreignKey: 'away_team', targetKey: 'id', as: 'awayClub' });

Club.hasMany(Match, { foreignKey: 'home_team', as: 'homeTeam' });
Club.hasMany(Match, { foreignKey: 'away_team', as: 'awayTeam' });

export default Club;
