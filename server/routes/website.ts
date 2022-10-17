import express from 'express';
import { getStatistics, getFeedback, addFeedback } from '../controllers';

const router = express.Router();

router.get('/statistics', getStatistics);
router.get('/feedback', getFeedback);
router.post('/feedback', addFeedback);

export default router;
