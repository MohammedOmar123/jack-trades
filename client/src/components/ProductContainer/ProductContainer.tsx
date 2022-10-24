import { Box, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import ProductDetailsComponent from '../ProductDetails/ProductDetails';
import ProductImage from '../ProductImage/ProductImage';
import { IProductProps } from '../../interfaces';
import './ProductContainer.css';
import { ImageContext } from '../Context/ImageContext';

const ProductContainer: FC<IProductProps> = ({
  attributes: {
    title, description, createdAt, 'Category.name': categoryName,
  },
}) => {
  const context = useContext(ImageContext);

  return (
    <Box className="container">

      <Typography
        sx={{
          width: '100%',
        }}
        variant="subtitle2"
      >
        {categoryName}
      </Typography>
      <Box>
        <Box>

          {/* Here is the left section of the page
      that contains the main Image and the categoryName */}

          <ProductImage
            image={context.mainImage}
            title={title}
          />
        </Box>

      </Box>

      {/* Here is the Right section of the page
      that contains title, desc, Product images and the date */}

      <ProductDetailsComponent
        title={title}
        description={description}
        createdAt={createdAt}
      />

    </Box>
  );
};

export default ProductContainer;
