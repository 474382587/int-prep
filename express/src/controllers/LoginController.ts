import { Response, Request, NextFunction } from 'express';
import { bodyValidator, controller, get, post, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log('logger!!!');
  next();
  return;
}

@controller('/auth')
class LoginController {
  @get('/login')
  // @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email:
          <input name="email" />
        </label>
      </div>
      <div>
        <label>Password: <input name="password" /></label>
      </div>
      <button>Login</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email && password && email === '1' && password === '1') {
      req.session = {
        loggedIn: true,
      };
      res.redirect('/');
    } else {
      res.send('Invalid login');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    if (req.session) {
      req.session.loggedIn = undefined;
    }
    res.redirect('/');
  }
}
