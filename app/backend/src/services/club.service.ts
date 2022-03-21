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
}

export default ClubService;
