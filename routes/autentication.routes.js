// *! RECUERDA QUE ESTAS EN LA RAMA QUERYS-TO-DATABASE

import Router from 'express';
import { autenticationController } from '../controller/autentication.controller.js';
import { autenticationMiddlewares } from '../middlewares/autentication.middlewares.js';

const router = Router();

router.post('/usuarios', autenticationController.createUser);
router.post(
  '/login',
  autenticationMiddlewares.verificationUser,
  autenticationController.loginUser
);
router.get(
  '/usuarios',
  autenticationMiddlewares.verificationToken,
  autenticationController.getUsersInfo
);

export default router;
