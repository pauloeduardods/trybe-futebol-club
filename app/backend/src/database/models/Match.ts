import { DataTypes, Model } from 'sequelize';
import db from '.';
import { IClub, IMatch } from '../../interfaces';

class Match extends Model implements IMatch {
  public id: number;

  public homeTeam: number;

  public awayTeam: number;

  public homeTeamGoals: number;

  public awayTeamGoals: number;

  public inProgress: boolean;

  public homeClube?: IClub;

  public awayClube?: IClub;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'home_team_goals',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'away_team_goals',
  },
  inProgress: {
    field: 'in_progress',
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'matchs',
});

export default Match;
