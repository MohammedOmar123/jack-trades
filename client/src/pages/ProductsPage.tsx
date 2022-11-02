import { Box, CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
// eslint-disable-next-line max-len
import ProductsCategory from '../components/ProductsCategory/ProductsCategoryList';
import ProductsFilter from '../components/ProductsFilter/ProductsFilter';
import ProductsSearch from '../components/ProductsSearch/ProductsSearch';
import { IData } from '../interfaces';
import { AuthContext } from '../components/Context/AuthContext';

const ProductsPage = () => {
  const { userId } = useContext(AuthContext);
  const [data, setData] = useState<IData | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [type, setType] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [q, setQ] = useState<string | null>(null);
  const [category, setCategory] = useState<number[]>([]);

  const changeOffsetValue = (value: number): void => {
    setOffset(value);
  };

  const changeTypeValue = (value: string | null): void => {
    setType(value);
  };

  const changeDateValue = (value: string): void => {
    setDate(value);
  };

  const changeSearchValue = (value: string): void => {
    setQ(value);
  };

  const changeCategoryValue = (value: number, index:number): void => {
    if (index > -1) setCategory((prev) => prev.filter((e, i) => i !== index));
    else setCategory((prevState) => ([...prevState, value]));
  };

  const getProducts = async (offsetValue: number) => {
    const productsResponse = await axios.get('/api/v1/products/filter', {
      params: {
        type,
        date,
        q,
        category,
        limit: 6,
        offset: offsetValue,
        userId,
      },
    });

    setData(productsResponse.data);
  };

  useEffect(() => {
    const asyncFuncToSetLoading = async () => {
      setLoading(true);
      await getProducts(offset);
      setLoading(false);
    };
    asyncFuncToSetLoading();
  }, [offset, type, date, q, category, userId]);

  if (!data) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50rem',
        }}
      >
        <CircularProgress
          color="primary"
        />
      </Box>
    );
  }

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
        <ProductsFilter
          category={category}
          changeTypeValue={changeTypeValue}
          changeDateValue={changeDateValue}
          changeCategoryValue={changeCategoryValue}
        />
      </Box>
      <Box sx={{
        width:
        { xs: '70%' },
      }}
      >
        <ProductsSearch
          titles={data.products}
          changeSearchValue={changeSearchValue}
        />
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
