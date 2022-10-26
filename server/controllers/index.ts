import { signIn, signup, signOut } from './account';
import { getStatistics, getFeedback, addFeedback } from './website';
import { getUserProducts, getUserProfile, getUserWishList } from './user';
import {
  getAllProducts, getProduct, addProduct, deleteProduct, updateProduct, filterProduct,
} from './products';
import {
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,
} from './request';
import { getAllNotifications, viewItemDetails } from './notifications';

import { deleteFromWishList, getAllWishListItems, addToWishList } from './wishList';

export {
  signIn, signup, signOut, getStatistics, getFeedback, addFeedback,
  getUserProducts, getUserProfile, getUserWishList,
  getAllProducts, getProduct, addProduct, deleteProduct, updateProduct, filterProduct,
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,
  getAllNotifications, viewItemDetails,
  deleteFromWishList, getAllWishListItems, addToWishList,
};
