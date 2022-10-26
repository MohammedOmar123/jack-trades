/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { Box, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsCategory from '../components/ProductsCategory/ProductsCategoryList';
import ProductsFilter from '../components/ProductsFilter/ProductsFilter';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const productsResponse = await axios.get('/api/v1/products?limit=6&offset=0');
    setProducts(productsResponse.data);
    console.log(productsResponse.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) return <div>Loading...</div>;

  return (
    <Stack
      mt="8rem"
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
};

export default ProductsPage;
