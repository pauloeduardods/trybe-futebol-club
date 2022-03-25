import { ILeaderboard, IService, IServiceError } from '../interfaces';
import LeaderboardModel from '../models/leaderboard.model';

class LeaderboardService {
  static async getLeaderboard(): Promise<IService<ILeaderboard[] | IServiceError>> {
    const leaderboard = await LeaderboardModel.getLeaderboard();
    // if (!leaderboard) {
    //   return {
    //     statusCode: 'NotFound',
    //     payload: { message: 'No clubs found' },
    //   };
    // }
    return {
      statusCode: 'OK',
      payload: leaderboard,
    };
  }
}

export default LeaderboardService;
