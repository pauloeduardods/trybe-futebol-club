import * as express from 'express';
import ClubController from '../controllers/club.controler';

class ClubRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', ClubController.getAll);
  }
}

export default ClubRoute;
