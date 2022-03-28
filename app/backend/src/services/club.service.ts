import { IClub, IService, IServiceError } from '../interfaces';
import ClubModel from '../models/club.model';

class ClubService {
  static async getAll(): Promise<IService<IClub[] | IServiceError>> {
    const clubs = await ClubModel.getAll();
    if (!clubs) {
      return {
        statusCode: 'NotFound',
        payload: { message: 'No clubs found' },
      };
    }
    return {
      statusCode: 'OK',
      payload: clubs,
    };
  }

  static async getById(id: number): Promise<IService<IClub | IServiceError>> {
    const club = await ClubModel.getById(id);
    if (!club) {
      return {
        statusCode: 'NotFound',
        payload: { message: 'No club found' },
      };
    }
    return {
      statusCode: 'OK',
      payload: club,
    };
  }
}

export default ClubService;
