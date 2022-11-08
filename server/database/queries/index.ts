import { getDonationsQuery, getExchangesQuery, getContributionsQuery } from './website/getStatistics';

import {
  signinQuery,
  signupQuery,
  checkUserExist,
  getNameQuery,
} from './account';
import getUserProfileQuery from './user/getUserProfile';
import getUserProductsQuery from './getUserProductsQuery';

import {
  addToWishListQuery, getAllWishlistItemsQuery, deleteFromWishListQuery, checkInWishlistQuery,
} from './wishlist';

import {
  getRequestQuery, addRequestQuery, getProductDetailsQuery, checkSelectedProductQuery,
  getAllRequestsQuery,
  deleteRequestQuery,
  declineAllOtherRequests,
  updateRequestQuery,
  getIsExchangeableQuery,
  checkRequestQuery,
  deleteSuccessRequestQuery,
  getAllOfferedProductsQuery,
  getOfferedProductsDetailsQuery,
} from './Requests';

import {
  deleteProductQuery, getProductQuery, updateProductQuery, addProductQuery, deleteExchangedProducts,
} from './products';

import { getReceiverNotificationsQuery, getSenderNotificationsQuery } from './notifications';
import { addMessageQuery, getAllMessagesQuery } from './chat';

export {
  getDonationsQuery,
  getExchangesQuery,
  getContributionsQuery,
  signinQuery,
  getUserProfileQuery,
  getUserProductsQuery,
  deleteProductQuery,
  getProductQuery,
  checkInWishlistQuery,
  addToWishListQuery,
  updateProductQuery,
  deleteFromWishListQuery,
  getAllWishlistItemsQuery,
  addProductQuery,
  getRequestQuery,
  addRequestQuery,
  getProductDetailsQuery,
  checkSelectedProductQuery,
  getAllRequestsQuery,
  deleteRequestQuery,
  declineAllOtherRequests,
  updateRequestQuery,
  getIsExchangeableQuery,
  getReceiverNotificationsQuery,
  getSenderNotificationsQuery,
  checkRequestQuery,
  deleteSuccessRequestQuery,
  getAllOfferedProductsQuery,
  getOfferedProductsDetailsQuery,
  signupQuery,
  checkUserExist,
  getNameQuery,
  deleteExchangedProducts,
  addMessageQuery,
  getAllMessagesQuery,
};
