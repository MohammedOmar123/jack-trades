import { signin, signup, signout } from './account';
import { getStatistics, getFeedback, addFeedback } from './website';
import { getUserProducts, getUserProfile, getUserWishList } from './user';
import {
  getAllProducts, getProduct, addProduct, deleteProduct, updateProduct, filterProduct,
} from './products';
import {
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,
} from './request';
import { getAllNotifications, viewItemDetails } from './notifications';

export {
  signin, signup, signout, getStatistics, getFeedback, addFeedback,
  getUserProducts, getUserProfile, getUserWishList,
  getAllProducts, getProduct, addProduct, deleteProduct, updateProduct, filterProduct,
  getAllRequest, addRequests, checkFavReq, deleteRequest, updateRequest,
  getAllNotifications, viewItemDetails,
};
