/* eslint-disable max-len */
import { Box, Stack } from '@mui/material';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';

const ProductsPage = () => (
  <Stack bgcolor="red" mt="7rem" height="20rem" direction="row" justifyContent="center" spacing={5} padding="0 10rem">
    <Box sx={{ border: '1px solid blue', flex: '1' }}>
      slkdjfdslkj
    </Box>
    <Box sx={{ border: '1px solid blue', flex: '2' }}>
      <ProductsSearch />
    </Box>
  </Stack>
);

export default ProductsPage;
