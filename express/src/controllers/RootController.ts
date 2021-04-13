import { NextFunction, Request, Response } from 'express';
import { controller, get, use } from './decorators';
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('not permitted');
}
@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
      <div>
        You are logged in
        <a href="/logout">Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        You are not logged in
        <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('welcome to protected data');
  }
}
