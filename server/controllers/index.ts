import {
  signIn, signup, signOut, checkAuth,
} from './account';
import { getStatistics, getFeedback, addFeedback } from './website';
import { getUserProducts, getUserProfile, getUserWishList } from './user';
import {
  getAllProducts,
  getProduct, addProduct, deleteProduct, updateProduct, filterProduct, getCategories,
} from './products';
import {
  getAllRequest, addRequests, deleteRequest, updateRequest,
} from './request';
import { getAllNotifications, viewItemDetails } from './notifications';

import {
  deleteFromWishList, getAllWishListItems, addToWishList, checkWishList,
} from './wishList';

export {
  signIn, signup, signOut, getStatistics, getFeedback, addFeedback,
  getUserProducts, getUserProfile, getUserWishList,
  getAllProducts,
  getProduct, addProduct, deleteProduct, updateProduct, filterProduct, getCategories,
  getAllRequest, addRequests, deleteRequest, updateRequest,
  getAllNotifications, viewItemDetails,
  deleteFromWishList, getAllWishListItems, addToWishList, checkAuth,
  checkWishList,
};
