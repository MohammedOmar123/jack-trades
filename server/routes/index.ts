import express from 'express';

import accountRouter from './account';
import websiteRouter from './website';
import userRouter from './users';
import productsRouter from './products';
import requestRouter from './request';
import notificationRouter from './notifications';

import { authentication } from '../middlewares';

const router = express.Router();
router.use('/account', accountRouter);
router.use('/website', websiteRouter);
router.use('/user', userRouter);
router.use('/products', authentication, productsRouter);
router.use('/requests', requestRouter);
router.use('/notifications', notificationRouter);
export default router;
