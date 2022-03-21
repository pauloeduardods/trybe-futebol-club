import { IMatch, IService, IServiceError } from '../interfaces';
import MatchModel from '../models/match.model';

class MatchService {
  static async getAll(inProgress: boolean): Promise<IService<IMatch[] | IServiceError>> {
    const matchs = await MatchModel.getAll(inProgress);
    if (!matchs) {
      return {
        statusCode: 'NotFound',
        payload: { message: 'No matchs found' }, 
      };
    }
    return {
      statusCode: 'OK',
      payload: matchs,
    };
  }
}

export default MatchService;
