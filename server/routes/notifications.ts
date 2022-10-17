import express from 'express';
import { getAllNotifications, viewItemDetails } from '../controllers';

const router = express.Router();

router.get('/', getAllNotifications);
router.get('/:notificationId/view', viewItemDetails);

export default router;
