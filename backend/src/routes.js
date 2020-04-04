import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import DeliverymanController from './app/controllers/DeliverymanController';
import FileDeliverymanController from './app/controllers/FileDeliverymanController';

import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DeliveryController';
import FileSignatureController from './app/controllers/FileSignatureController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import ProblemController from './app/controllers/ProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // cria usuário

// sessions
routes.post('/sessions', SessionController.store);

// delivery
routes.get('/deliveryman/:id/deliveries', DeliveryController.index);
routes.put('/deliveryman/:id/deliveries', DeliveryController.update);
// upload de arquivos
routes.post(
  '/files/signature',
  upload.single('file'),
  FileSignatureController.store
);

// problems
routes.post('/delivery/:order/problems', DeliveryProblemController.store);

// middlewares global*************************************************************
routes.use(authMiddleware);

// users update
routes.put('/users', UserController.update);

// recipients
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

// upload de arquivos
routes.post(
  '/files/deliveryman',
  upload.single('file'),
  FileDeliverymanController.store
);

// Deliveryman
routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.delete('/deliveryman/:id', DeliverymanController.delete);
routes.put('/deliveryman/:id', DeliverymanController.update);

// Order
routes.get('/order', OrderController.index);
routes.post('/order', OrderController.store);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

// Delivery Problem
routes.get('/delivery/problems', DeliveryProblemController.index);
routes.put('/problem/:id/cancel-delivery', DeliveryProblemController.update);

// Problem Admin
routes.get('/delivery/:order/problems', ProblemController.index);
export default routes;
