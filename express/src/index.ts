import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import './controllers/RootController'
import { AppRouter } from './AppRouter';

const app = express();
app.use(
  cookieSession({
    keys: ['asd'],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('port 3000 - listening');
});
