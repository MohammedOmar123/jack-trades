import { getDonationsQuery, getExchangesQuery, getContributionsQuery } from './website/getStatistics';
import signinQuery from './account/signin';
import getUserProfileQuery from './user/getUserProfile';
import getUserProductsQuery from './getUserProductsQuery';
import getFav from './Requests/checkInWishList';
import { addToWishListQuery } from './wishlist';
import { checkInWishList } from './Requests';
import { deleteProductQuery, getProductQuery, updateProductQuery } from './products';

export {
  getDonationsQuery,
  getExchangesQuery,
  getContributionsQuery,
  signinQuery,
  getUserProfileQuery,
  getUserProductsQuery,
  deleteProductQuery,
  getProductQuery,
  getFav,
  addToWishListQuery,
  checkInWishList,
  updateProductQuery,
};
