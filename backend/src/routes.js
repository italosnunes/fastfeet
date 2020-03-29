import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store); // cria usuário

// sessions
routes.post('/sessions', SessionController.store);

// middlewares global
routes.use(authMiddleware);

// users update
routes.put('/users', UserController.update);

// recipients
routes.get('/recipients', RecipientController.get);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
