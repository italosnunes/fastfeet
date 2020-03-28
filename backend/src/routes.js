import { Router } from 'express';

const routes = new Router();

routes.get('/',(req,res)=>{
  return res.json({ App:'Estamos no ar' });
});

export default routes;