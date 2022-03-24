import * as express from 'express';
import MatchContoller from '../controllers/match.controller';
import Auth from '../middlewares/auth.middleware';

class MatchRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', MatchContoller.getAll);
    this.router.post('/', Auth.tokenValidation, MatchContoller.matchValidation, MatchContoller.create);
    this.router.patch('/:id', Auth.tokenValidation, MatchContoller.update);
    this.router.patch('/:id/finish', Auth.tokenValidation, MatchContoller.finish);
  }
}

export default MatchRoute;