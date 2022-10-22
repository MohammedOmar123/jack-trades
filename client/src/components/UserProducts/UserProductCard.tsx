import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Image, Button } from '../index';
import { UserProduct } from '../../interfaces';

const UserProductCard:FC<{ product : UserProduct }> = ({ product }) => (
  <Box className="product-card">
    <Image attributes={{
      src: product.gallery[0],
      alt: `an image of ${product.title}`,
      className: 'product-img',
    }}
    />
    <Box className="product-details">
      <Typography variant="h5">{product.title}</Typography>
      <Typography>
        {product.description}
      </Typography>
      <Box className="buttons">
        <Button style={{
          text: 'Edit', height: 40, width: 100, marginRight: 1, icon: false,
        }}
        />
        <Button style={{
          text: 'Delete', height: 40, width: 100, marginRight: 1, icon: false,
        }}
        />
      </Box>
    </Box>
  </Box>
);

export default UserProductCard;
