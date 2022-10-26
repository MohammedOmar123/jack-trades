import { getDonationsQuery, getExchangesQuery, getContributionsQuery } from './website/getStatistics';
import signinQuery from './account/signin';
import getUserProfileQuery from './user/getUserProfile';
import getUserProductsQuery from './getUserProductsQuery';
import { deleteProductQuery, getProductQuery } from './products';
import getFav from './Requests/checkInWishList';
import { addToWishListQuery } from './wishlist';
import { checkInWishList } from './Requests';

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
};
