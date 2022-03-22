import { Request, Response, NextFunction } from 'express';
import { HTTPStatusCode } from '../utils';
import { IServiceError, IService } from '../interfaces';

const errorMiddleware = (
  err: IService<IServiceError>,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err.statusCode) {
    const { statusCode, payload } = err as IService<IServiceError>;
    return res.status(HTTPStatusCode[statusCode]).json(payload).end();
  }
  return res.status(HTTPStatusCode.InternalServerError).json({ message: 'Internal Server Error' }).end();
};

export default errorMiddleware;
