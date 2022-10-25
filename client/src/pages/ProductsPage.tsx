/* eslint-disable max-len */
import { Box, Stack } from '@mui/material';
import ProductsCategory from '../components/ProductsCategory/ProductsCategoryList';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';

const ProductsPage = () => (
  <Stack
    mt="10rem"
    direction="row"
    justifyContent="center"
    spacing={5}
    padding="0 10rem"
  >
    <Box sx={{ flex: '1' }}>
      slkdjfdslkj
    </Box>
    <Box sx={{ flex: '2' }}>
      <ProductsSearch />
      <ProductsCategory />
    </Box>
  </Stack>
);

export default ProductsPage;
