import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ButtonComponent from '../Button/Button';
import { IProductDetailsProps } from '../../interfaces';
import './ProductDetails.css';
import ImagesList from '../ImagesList/ImagesList';

const ProductDetailsComponent = ({
  title, description, createdAt,
}
: IProductDetailsProps) => {
  const [FavIcon, setFavIcon] = useState('FavoriteBorder');
  const handleIsFav = () => {
    setFavIcon(FavIcon === 'FavoriteBorder' ? 'Favorite' : 'FavoriteBorder');
  };
  const handleRequest = () => {
    console.log('Hello handle Request !');
  };
  const handleContactSeller = () => {
    console.log('Hello contact seller');
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
            {createdAt}
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
