import './ProductImage.css';
import { Box } from '@mui/material/';
import { IProductImageProps } from '../../interfaces';
import Image from '../Image/Image';

const ProductImage = ({ image, title }:IProductImageProps) => (
  <Box sx={
    {
      width: '50%',
    }
  }
  >
    <Image attributes={{
      src: image,
      alt: title,
      className: 'productImage',
    }}
    />
  </Box>
);

export default ProductImage;
