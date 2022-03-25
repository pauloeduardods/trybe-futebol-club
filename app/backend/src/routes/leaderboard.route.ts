import * as express from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

class LeaderboardRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', LeaderboardController.getLeaderboard);
  }
}

export default LeaderboardRoute;
