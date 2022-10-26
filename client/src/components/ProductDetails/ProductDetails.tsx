import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonComponent from '../Button/Button';
import { IProductDetailsProps } from '../../interfaces';
import ImagesList from '../ImagesList/ImagesList';
import './ProductDetails.css';

const ProductDetailsComponent = ({
  title, description, createdAt, userId,
}
: IProductDetailsProps) => {
  const [FavIcon, setFavIcon] = useState('FavoriteBorder');
  const { id } = useParams();
  const location = useNavigate();

  const checkWishList = async () => {
    const response = await axios.get(`/api/v1/requests/checkFavReq/${id}`);
    if (response.data === true) {
      setFavIcon('Favorite');
    }
  };

  useEffect(() => {
    checkWishList();
  }, []);

  const errorMessage = 'Oops...';

  const handleUnauthorizedRequests = () => {
    Swal.fire({
      icon: 'error',
      title: errorMessage,
      // eslint-disable-next-line max-len
      text: 'You don\'t have an account yet SignUp to add your favorites to your wishlist',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, SignUp',
    }).then((result) => {
      if (result.isConfirmed) {
        location('/Signup');
      }
    });
  };

  const handleWishListRequests = (
    titleSwl:string,
    message:string,
    icon:'success' | 'error',
  ) => {
    Swal.fire({
      title: titleSwl,
      text: message,
      icon,
      showConfirmButton: false,
      timer: 1500,
      position: 'center',
    });
  };

  const addToWishList = async () => {
    try {
      const res = await axios.post(`/api/v1/wishlist/${id}`);
      handleWishListRequests(
        'Added Successfully',
        res.data.message,
        'success',
      );
      setFavIcon('Favorite');
    } catch (error) {
      const { message } = error.response.data;
      if (message === 'Unauthorized') {
        handleUnauthorizedRequests();
      } else {
        handleWishListRequests(errorMessage, message, 'error');
      }
    }
  };

  const deleteFromWishList = async () => {
    try {
      Swal.fire({
        icon: 'question',
        text: 'Do you really want to delete it from wishlist',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`/api/v1/wishlist/${id}`);
          handleWishListRequests(
            'Deleted Successfully',
            res.data.message,
            'success',
          );
          setFavIcon('FavoriteBorder');
        }
      }).catch((err) => {
        const { message } = err.response.data;
        if (message === 'Unauthorized') {
          handleUnauthorizedRequests();
        } else {
          handleWishListRequests(errorMessage, message, 'error');
        }
      });
    } catch (error) {
      const { message } = error.response.data;
      handleWishListRequests(errorMessage, message, 'error');
    }
  };

  const handleIsFav = () => {
    // when the user clicks on the fav button
    //  and the state is FavoriteBorder  Which means
    // that the user has not added the item to the wishlist yet
    // addToWishList function will be invoked, else it will be deleted.
    if (FavIcon === 'FavoriteBorder') {
      addToWishList();
    } else {
      deleteFromWishList();
    }
  };

  const handleRequest = () => {
    console.log('Hello handle Request !');
  };

  const handleContactSeller = () => {
    location(`/profile/${userId}`);
  };

  const convertDate = (timeStamp:string) => {
    const date = new Date(timeStamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <Box
      className="product-details-Container"
      sx={{
        paddingTop: '3%',
      }}
    >
      <Typography
        variant="inherit"
        className="product-title"
      >
        {title}
      </Typography>
      <Box className="right-sec">
        <Box className="box-desc">
          <Typography className="description">
            {description}
          </Typography>
          <Typography className="created-at">
            {convertDate(createdAt)}
          </Typography>
        </Box>
        <Box className="buttonsComp-container">
          <ButtonComponent style={{
            text: 'Request Item',
            icon: 'LocalMall',
            classes: 'btn',
            handleClick: handleRequest,
          }}
          />
          <ButtonComponent style={{
            text: 'Add to WishList',
            icon: FavIcon,
            classes: 'btn white-btn',
            handleClick: handleIsFav,
          }}
          />
          <ButtonComponent style={{
            text: 'Contact Seller',
            icon: 'LocalMall',
            classes: 'btn white-btn',
            handleClick: handleContactSeller,
          }}
          />
        </Box>
        <ImagesList />
      </Box>
    </Box>
  );
};

export default ProductDetailsComponent;
