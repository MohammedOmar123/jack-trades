import express from 'express';
import { getAllNotifications, viewItemDetails } from '../controllers';
import { authentication } from '../middlewares';

const router = express.Router();

router.get('/', authentication, getAllNotifications);
router.get('/:notificationId/view', viewItemDetails);

export default router;
