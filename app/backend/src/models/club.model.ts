import Club from '../database/models/Club';
import { IClub } from '../interfaces';

class ClubModel {
  public static async getAll(): Promise<IClub[]> {
    return Club.findAll();
  }
}

export default ClubModel;
