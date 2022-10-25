/* eslint-disable max-len */
import { Box, Stack } from '@mui/material';
import ProductsCategory from '../components/ProductsCategory/ProductsCategoryList';
import ProductsFilter from '../components/ProductsFilter/ProductsFilter';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';

const ProductsPage = () => (
  <Stack
    mt="10rem"
    direction="row"
    justifyContent="center"
    spacing={7}
    padding="0 8rem"
  >
    <Box sx={{ flex: '0.62' }}>
      <ProductsFilter />
    </Box>
    <Box sx={{ flex: '2' }}>
      <ProductsSearch />
      <ProductsCategory />
    </Box>
  </Stack>
);

export default ProductsPage;
