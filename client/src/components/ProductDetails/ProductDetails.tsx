import { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from 'axios';
import {
  useParams, useNavigate, useLocation,
} from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonComponent from '../Button/Button';
import { IProductDetailsProps } from '../../interfaces';
import ImagesList from '../ImagesList/ImagesList';
import RequestPopup from '../RequestPopup';
import { ImageContext } from '../Context/ImageContext';
import { AuthContext } from '../Context/AuthContext';
import './ProductDetails.css';

const ProductDetailsComponent = ({
  id: productId, title, description, createdAt, userId, type,
}
: IProductDetailsProps) => {
  const [FavIcon, setFavIcon] = useState('FavoriteBorder');
  const [text, setText] = useState<string>('Add to wishlist');
  const { id } = useParams();
  const navigate = useNavigate();
  const from = useLocation();
  // const [open, setOpen] = useState<boolean>(false);
  const { fullName: senderName, userId: authUserId } = useContext(AuthContext);
  const {
    setProductId, handleRequest, setOpen, open, setProductArray,
  } = useContext(ImageContext);

  const errorMessage = 'Oops...';

  const handleUnauthorizedRequests = (textMessage:string) => {
    Swal.fire({
      icon: 'error',
      // 'SignIn first to be able to add the item into the wishlist'
      title: errorMessage,
      text: textMessage,
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

  const handleOpen = () => {
    if (authUserId) {
      if (type === 'exchange') setOpen(true);
      else handleRequest(userId, senderName);
    } else {
      handleUnauthorizedRequests('SignIn first to be able to send a request');
    }
  };

  const handleClose = () => {
    setOpen(false);
    setProductArray([]);
  };

  const checkWishList = async () => {
    const response = await axios.get(`/api/v1/wishlist/${id}`);
    if (response.data === true) {
      setFavIcon('Favorite');
      setText('Remove from wishlist');
    }
  };

  useEffect(() => {
    checkWishList();
    setProductId(productId);
  }, []);

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
      await axios.post(`/api/v1/wishlist/${id}`);
      setFavIcon('Favorite');
      setText('Remove from wishlist');
    } catch (error) {
      const { message } = error.response.data;
      if (message === 'Unauthorized') {
        // eslint-disable-next-line max-len
        handleUnauthorizedRequests('SignIn first to be able to add the item into the wishlist');
      } else {
        handleWishListRequests(errorMessage, message, 'error');
      }
    }
  };

  const deleteFromWishList = async () => {
    try {
      await axios.delete(`/api/v1/wishlist/${id}`);
      setFavIcon('FavoriteBorder');
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
            <CalendarMonthIcon />
            {convertDate(createdAt)}
          </Typography>
          <Typography
            sx={type === 'donation' ? {
              backgroundColor: '#8f1d86',
            } : {
              backgroundColor: '#c6911f',
            }}
            className="productType"
          >
            {type}
          </Typography>
        </Box>
        <Box className="buttonsComp-container">
          <ButtonComponent style={{
            text: 'Request Item',
            icon: 'LocalMall',
            classes: 'btn',
            handleClick: handleOpen,
          }}
          />
          <ButtonComponent style={{
            text,
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
      <RequestPopup
        open={open}
        handleClose={handleClose}
        receiverId={userId}
      />
    </Box>
  );
};

export default ProductDetailsComponent;
