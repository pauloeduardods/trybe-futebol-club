import * as express from 'express';
import * as bodyParser from 'body-parser';
import errorMiddleware from './middlewares/error.middleware';
import Login from './routes/login.route';
import ClubRoute from './routes/club.route';
import MatchRoute from './routes/match.route';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.config();
    this.routes();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use('/login', new Login().router);
    this.app.use('/clubs', new ClubRoute().router);
    this.app.use('/matchs', new MatchRoute().router);
    this.app.use(errorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  }
}

export { App };

// Testes
export const { app } = new App();
