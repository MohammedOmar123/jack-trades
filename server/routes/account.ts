import express from 'express';
import { signIn, signup, signOut } from '../controllers';
// import { verifyToken } from '../middlewares';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signIn);
router.get('/signOut', signOut);

export default router;
