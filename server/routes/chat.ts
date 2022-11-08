import express from 'express';

import { authentication } from '../middlewares';

import { addMessage, getAllMessages } from '../controllers';

const router = express.Router();
router.post('/addMessage', authentication, addMessage);
router.get('/', authentication, getAllMessages);
export default router;
