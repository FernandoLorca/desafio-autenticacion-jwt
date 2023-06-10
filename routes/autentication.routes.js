// *! RECUERDA QUE ESTAS EN LA RAMA QUERYS-TO-DATABASE

import Router from 'express';
import { autenticationController } from '../controller/autentication.controller.js';

const router = Router();

router.post('/usuarios', autenticationController.createUser);
router.post('/login', autenticationController.loginUser);
router.get('/usuarios', autenticationController.getUsersInfo);

export default router;
