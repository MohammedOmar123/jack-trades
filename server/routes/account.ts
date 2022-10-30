import express from 'express';
import {
  signIn, signup, signOut, checkAuth,
} from '../controllers';
import { authentication } from '../middlewares';

const router = express.Router();
router.get('/', authentication, checkAuth);
router.post('/signup', signup);
router.post('/signin', signIn);
router.post('/logout', signOut);

export default router;
