import { getDonationsQuery, getExchangesQuery, getContributionsQuery } from './website/getStatistics';
import signinQuery from './account/signin';
import getUserProfileQuery from './user/getUserProfile';
import getUserProductsQuery from './getUserProductsQuery';
import {
  addToWishListQuery, getAllWishlistItemsQuery, deleteFromWishListQuery, checkInWishlistQuery,
} from './wishlist';
import {
  getRequestQuery, addRequestQuery, getProductDetailsQuery, checkSelectedProductQuery,
} from './Requests';
import {
  deleteProductQuery, getProductQuery, updateProductQuery, addProductQuery,
} from './products';
import { addFeedbackQuery, getUsername } from './website/addFeedback';
import getFeedbackQuery from './website/getFeedback';

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
  addFeedbackQuery,
  getUsername,
  getFeedbackQuery,
};
