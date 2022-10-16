import express from 'express';
import {
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,

} from '../controllers';

const router = express.Router();

router.get('/', getAllRequest);
router.post('/', addRequests);
router.get('/checkFavReq', checkFavReq);
router.delete('/:reqId', deleteRequest);
router.put('/:reqId/:productId', updateRequest);
// Note: ordering routers here is matter

export default router;
