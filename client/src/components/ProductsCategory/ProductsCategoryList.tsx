/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FavoriteBorder } from '@mui/icons-material';
import {
  Box, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Pagination,
} from '@mui/material';
import ProductsCategoryCard from './ProductsCategoryCard';

const names = [
  'hakim', 'yusuf', 'yzan',
];

const ProductsCategory = () => (
  <Box
    sx={{
      boxShadow: '0px 0px 10px rgba(27, 75, 102, 0.25)',
      marginTop: '2rem',
      padding: '1rem 2rem',
    }}
  >
    <ImageList>
      <ImageListItem key="Subheader" cols={3} sx={{ marginBottom: '1rem', fontWeight: '600' }}>
        <ListSubheader sx={{ fontWeight: '600' }} component="p">
          {names.length === 0 ? 'No Item Found' : 'Showing 1 - 40 of 145 items'}
        </ListSubheader>
      </ImageListItem>

      <ProductsCategoryCard />
      <ProductsCategoryCard />
      <ProductsCategoryCard />
      <ProductsCategoryCard />

    </ImageList>
    <Box sx={{
      marginTop: '2rem', display: 'flex', justifyContent: 'center',
    }}
    >
      <Pagination sx={{ textAlign: 'center' }} count={5} variant="outlined" shape="rounded" />
    </Box>
  </Box>
);

export default ProductsCategory;
