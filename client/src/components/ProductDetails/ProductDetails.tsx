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
          }}
          />
          <ButtonComponent style={{
            text: 'Add to WishList',
            icon: FavIcon,
            classes: 'btn white-btn',
            handleIsFav,
          }}
          />
          <ButtonComponent style={{
            text: 'Contact Seller',
            icon: 'LocalMall',
            classes: 'btn white-btn',
          }}
          />
        </Box>
        <ImagesList />
      </Box>
    </Box>
  );
};

export default ProductDetailsComponent;
