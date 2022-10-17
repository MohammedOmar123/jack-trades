import express from 'express';
import { getUserProducts, getUserProfile, getUserWishList } from '../controllers';

const router = express.Router();

router.get('/products', getUserProducts);
router.get('/favorites', getUserWishList);
router.get('/:userId?', getUserProfile);
// Note: the order of the routes matters

export default router;
