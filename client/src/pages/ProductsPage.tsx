import { Box, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import ProductsCategory from '../components/ProductsCategory/ProductsCategoryList';
import ProductsFilter from '../components/ProductsFilter/ProductsFilter';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';
import { IData } from '../interfaces';

const ProductsPage = () => {
  const [data, setData] = useState<IData | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const changeOffsetValue = (value: number): void => {
    setOffset(value);
  };
  const getProducts = async (offsetValue: number) => {
    const productsResponse = await axios
      .get(`/api/v1/products?limit=6&offset=${offsetValue * 3}`);

    setData(productsResponse.data);
  };

  useEffect(() => {
    const asyncFuncToSetLoading = async () => {
      setLoading(true);
      await getProducts(offset);
      setLoading(false);
    };
    asyncFuncToSetLoading();
  }, [offset]);

  if (!data) return <div>Loading...</div>;

  return (
    <Stack
      mt="8rem"
      direction="row"
      justifyContent="center"
      sx={{ padding: { xs: '0 1rem', sm: '0 1rem', md: '0 3rem' } }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          marginRight: '2rem',
          width: { sm: '18rem', md: '18rem' },
        }}
      >
        <ProductsFilter />
      </Box>
      <Box sx={{
        width:
        { xs: '70%' },
      }}
      >
        <ProductsSearch />
        <ProductsCategory
          products={data.products}
          totalProducts={data.totalProducts}
          totalPages={data.totalPages}
          changeOffsetValue={changeOffsetValue}
          loading={loading}
        />
      </Box>
    </Stack>
  );
};

export default ProductsPage;
