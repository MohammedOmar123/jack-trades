import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import {
  useParams, useNavigate, useLocation,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonComponent from '../Button/Button';
import { IProductDetailsProps } from '../../interfaces';
import ImagesList from '../ImagesList/ImagesList';
import './ProductDetails.css';

const ProductDetailsComponent = ({
  title, description, createdAt, userId, type, isAvailable,
}
: IProductDetailsProps) => {
  const [FavIcon, setFavIcon] = useState('FavoriteBorder');
  const { id } = useParams();
  const navigate = useNavigate();
  const from = useLocation();

  const checkWishList = async () => {
    const response = await axios.get(`/api/v1/wishlist/${id}`);
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
      text: 'SignIn first to be able to add the item into the wishlist',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, SigIn',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/signin', {
          state: { from },
          replace: true,
        });
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
        title: 'Are you sure?',
        text: 'Remove this product from your wishlist !',
        showCancelButton: true,
        confirmButtonColor: '#1b4b66',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
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
    // FavoriteBorder means that the item doesn't exist in the wishlist
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
    navigate(`/profile/${userId}`);
  };

  const convertDate = (timeStamp:string) => {
    const date = new Date(timeStamp);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <Box
      className="product-details-Container"
      sx={{
        paddingTop: '2%',
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
          <Box>
            <Typography sx={{
              color: 'black',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              marginTop: '15px',
            }}
            >
              For
              {' '}
              {type}
            </Typography>
            <Typography sx={{
              color: 'black',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              marginTop: '15px',
            }}
            >
              {isAvailable ? 'Available' : 'Not Available'}
            </Typography>
          </Box>
        </Box>
        <Box className="buttonsComp-container">
          <ButtonComponent style={{
            text: 'Request Item',
            icon: 'LocalMall',
            classes: 'btn',
            disabled: isAvailable,
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
