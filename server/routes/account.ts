import express from 'express';
import { signIn, signup, signOut } from '../controllers';

const router = express.Router();

router.post('/signup', signup);
router.post('/signIn', signIn);
router.get('/signOut', signOut);

export default router;
