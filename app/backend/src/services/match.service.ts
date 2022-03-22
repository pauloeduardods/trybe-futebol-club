import { IMatch, IService, IServiceError } from '../interfaces';
import MatchModel from '../models/match.model';
import matchSchema from '../validations/match.validation';

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

  static async matchValidation(match: IMatch): Promise<IService<IServiceError> | void> {
    const { error } = matchSchema.validate(match);
    if (error?.details[0].type) {
      return {
        statusCode: 'BadRequest',
        payload: { message: error.details[0].message }, 
      };
    }
    if (match.homeTeam === match.awayTeam) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'Home and away team cannot be the same' }, 
      };
    }
    const homeTeam = await MatchModel.getById(match.homeTeam as number);
    const awayTeam = await MatchModel.getById(match.awayTeam as number);
    if (!homeTeam || !awayTeam) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'One of the teams does not exist' }, 
      };
    }
  }

  static async create(match: IMatch): Promise<IService<IMatch | IServiceError>> {
    const id = await MatchModel.create(match);
    if (!id) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'Match not created' }, 
      };
    }
    return {
      statusCode: 'Created',
      payload: { id, ...match },
    };
  }
}

export default MatchService;
