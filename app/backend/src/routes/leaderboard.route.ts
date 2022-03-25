import * as express from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

class LeaderboardRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', LeaderboardController.getAll);
    this.router.get('/home', LeaderboardController.getHome);
    this.router.get('/away', LeaderboardController.getAway);
  }
}

export default LeaderboardRoute;
