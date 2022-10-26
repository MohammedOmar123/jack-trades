import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonComponent from '../Button/Button';
import { IProductDetailsProps } from '../../interfaces';
import './ProductDetails.css';
import ImagesList from '../ImagesList/ImagesList';

const ProductDetailsComponent = ({
  title, description, createdAt,
}
: IProductDetailsProps) => {
  const [FavIcon, setFavIcon] = useState('FavoriteBorder');
  const { id } = useParams();

  const checkWishList = async () => {
    const response = await axios.get(`/api/v1/requests/checkFavReq/${id}`);
    if (response.data === true) {
      setFavIcon('Favorite');
    }
  };

  useEffect(() => {
    checkWishList();
  }, []);
  const handleIsFav = () => {
    const addToWishList = async () => {
      try {
        const res = await axios.post(`/api/v1/wishlist/${id}`);
        Swal.fire(
          'Added successfully',
          res.data,
          'success',
        );
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data,
        });
      }
    };

    const deleteFromWishList = async () => {
      try {
        const res = await axios.delete(`/api/v1/wishlist/${id}`);
        Swal.fire(
          'deleted successfully',
          res.data,
          'success',
        );
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data,
        });
      }
    };

    setFavIcon(FavIcon === 'FavoriteBorder' ? 'Favorite' : 'FavoriteBorder');
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
    console.log('Hello contact seller');
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
