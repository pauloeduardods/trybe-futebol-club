import * as express from 'express';
import MatchContoller from '../controllers/match.controller';
import UserController from '../controllers/user.controller';
import Auth from '../middlewares/auth.middleware';

class MatchRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', MatchContoller.getAll);
  }
}

export default MatchRoute;