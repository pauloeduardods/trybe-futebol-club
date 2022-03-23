import Club from '../database/models/Club';
import { IClub } from '../interfaces';

class ClubModel {
  public static async getAll(): Promise<IClub[]> {
    return Club.findAll();
  }

  public static async getById(id: number): Promise<IClub | null> {
    return Club.findByPk(id);
  }
}

export default ClubModel;
