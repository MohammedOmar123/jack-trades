import express from 'express';
import { signIn, signup, signOut } from '../controllers';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.post('/logout', signOut);

export default router;
