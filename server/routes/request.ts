import express from 'express';
import {
  getAllRequest, addRequests, deleteRequest, updateRequest,

} from '../controllers';
import { authentication } from '../middlewares';

const router = express.Router();

router.get('/', getAllRequest);
// router.get('/:productId', authentication, checkRequest);
router.post('/', authentication, addRequests);
router.delete('/:reqId', deleteRequest);
router.put('/:reqId/:productId', updateRequest);
// Note: the order of the routes matters
export default router;
