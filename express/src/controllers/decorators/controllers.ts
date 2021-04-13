import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';
import { Methods } from './Methods';
import { AppRouter } from '../../AppRouter';
import { NextFunction, RequestHandler, Response, Request } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('invalid');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('invalid req');
        return;
      }
    }

    next();
    return;
  };
}

const router = AppRouter.getInstance();
export function controller(routePrefix: string) {
  return function (target: Function) {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        [];
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) ||
        [];
      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
