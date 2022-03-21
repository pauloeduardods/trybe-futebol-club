import { Op } from 'sequelize';
import Club from '../database/models/Club';
import Match from '../database/models/Match';
import { IMatch } from '../interfaces';

class MatchModel {
  private static options = {
    attributes: { exclude: ['homeTeam', 'awayTeam'] },
    include: [
      {
        model: Club,
        as: 'homeClub',
        attributes: { exclude: ['id'] },
      },
      {
        model: Club,
        as: 'awayClub',
        attributes: { exclude: ['id'] },
      },
    ],
  }

  public static async getAll(inProgress: boolean): Promise<IMatch[]> {
    return Match.findAll({
      ...this.options,
      where: {
        inProgress: {
          [Op.or]: [true, inProgress],
        },
      },
    }) as unknown as Promise<IMatch[]>;
  }
}

export default MatchModel;