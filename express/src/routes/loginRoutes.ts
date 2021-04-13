import { NextFunction, Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('not permitted');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === '1' && password === '1') {
    req.session = {
      loggedIn: true,
    };
    res.redirect('/');
  } else {
    res.send('Invalid login');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
    <div>
      You are logged in
      <a href="">Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      You are not logged in
      <a href="">Login</a>
    </div>
    `);
  }
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.loggedIn = false;
  }
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('welcome to protected data')
});

export { router };
