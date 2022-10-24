/* eslint-disable max-len */
import { Box, Stack } from '@mui/material';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';

const ProductsPage = () => (
  <Stack
    // bgcolor="#CCC"
    mt="7rem"
    height="20rem"
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
    </Box>
  </Stack>
);

export default ProductsPage;
