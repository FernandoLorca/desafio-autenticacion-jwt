// *! RECUERDA QUE ESTAS EN LA RAMA ROUTES-AND-MODULES

import Router from 'express';
import { autenticationController } from '../controller/autentication.controller.js';

const router = Router();

router.post('/usuarios', autenticationController.createUser);
router.post('/login');
router.get('/usuarios');

export default router;
