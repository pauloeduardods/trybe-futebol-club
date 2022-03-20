import * as express from 'express';
import UserController from '../controllers/user.controller';

class Login {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/', UserController.loginValidation, UserController.login);
    this.router.get('/validate', UserController.tokenValidation);
  }
}

export default Login;
