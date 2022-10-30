import express from 'express';
import {
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,

} from '../controllers';
import { authentication } from '../middlewares';

const router = express.Router();

router.get('/', getAllRequest);
router.post('/', addRequests);
router.get('/checkFavReq/:productId', authentication, checkFavReq);
router.delete('/:reqId', deleteRequest);
router.put('/:reqId/:productId', updateRequest);
// Note: the order of the routes matters
export default router;
