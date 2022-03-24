import { IMatch, IService, IServiceError } from '../interfaces';
import ClubModel from '../models/club.model';
import MatchModel from '../models/match.model';
import { matchSchema, updateMatchGoalsSchema } from '../validations/match.validation';

class MatchService {
  static async getAll(inProgress?: boolean): Promise<IService<IMatch[] | IServiceError>> {
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
    if (match.homeTeam === match.awayTeam) {
      return {
        statusCode: 'Unauthorized',
        payload: { message: 'It is not possible to create a match with two equal teams' }, 
      };
    }
    const { error } = matchSchema.validate(match);
    if (error?.details[0].type) {
      return {
        statusCode: 'Unauthorized',
        payload: { message: error.details[0].message }, 
      };
    }
    const homeTeam = await ClubModel.getById(match.homeTeam as number);
    const awayTeam = await ClubModel.getById(match.awayTeam as number);
    if (!homeTeam || !awayTeam) {
      return {
        statusCode: 'Unauthorized',
        payload: { message: 'There is no team with such id!' }, 
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

  static async finish(id: number): Promise<IService<IMatch | IServiceError>> {
    const match = await MatchModel.getById(id);
    if (!match) {
      return {
        statusCode: 'NotFound',
        payload: { message: 'Match not found' },
      };
    }
    if (!match.inProgress) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'Match already finished' },
      }
    }
    match.inProgress = false;
    const updated = await MatchModel.update(match);
    if (!updated) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'Match not updated' }, 
      };
    }
    return {
      statusCode: 'OK',
      payload: match,
    };
  }

  static async update(id: number, match: IMatch): Promise<IService<IMatch | IServiceError>> {
    const validation = updateMatchGoalsSchema.validate(match)
    if (validation.error?.details[0].type) {
      return {
        statusCode: 'BadRequest',
        payload: { message: validation.error.details[0].message },
      };
    }
    const oldMatch = await MatchModel.getById(id);
    if (!oldMatch) {
      return {
        statusCode: 'NotFound',
        payload: { message: 'Match not found' }, 
      };
    }
    const newMatch = { id, homeTeamGoals: match.homeTeamGoals, awayTeamGoals: match.awayTeamGoals, inProgress: oldMatch.inProgress };
    const updated = await MatchModel.update(newMatch);
    if (!updated) {
      return {
        statusCode: 'BadRequest',
        payload: { message: 'Match not updated' }, 
      };
    }
    return {
      statusCode: 'OK',
      payload: newMatch,
    };
  }
}

export default MatchService;
