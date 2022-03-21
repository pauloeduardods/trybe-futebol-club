import * as express from 'express';
import UserController from '../controllers/user.controller';
import Auth from '../middlewares/auth.middleware';

class LoginRoute {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/', UserController.loginValidation, UserController.login);
    this.router.get('/validate', Auth.tokenValidation, UserController.validation);
  }
}

export default LoginRoute;
