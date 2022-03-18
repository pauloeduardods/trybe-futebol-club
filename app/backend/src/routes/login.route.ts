import * as express from 'express';
import UserController from '../controllers/user.controller';

class Login {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.postLogin();
  }

  private postLogin(): void {
    this.router.post('/', UserController.loginValidation, UserController.login);
  }
}

export default Login;
