import { FC } from 'react';
import {
  Box, ImageList, ImageListItem, ListSubheader, Pagination,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import ProductsCategoryCard from './ProductsCategoryCard';
// import SpinnerLoading from '../Loading/Loading';
import { IProducts } from '../../interfaces';

// eslint-disable-next-line max-len
const ProductsCategory:FC <{ products: IProducts[], totalProducts: number, totalPages: number, loading: boolean, changeOffsetValue: (value: number) => void }> = ({
  products,
  totalProducts,
  totalPages,
  loading,
  changeOffsetValue,
}) => (
  <Box
    sx={{
      boxShadow: '0px 0px 10px rgba(27, 75, 102, 0.25)',
      marginTop: '2rem',
      height: '90%',
      padding: '1rem 2rem',
    }}
  >
    <ImageListItem
      key="Subheader"
      cols={1}
      sx={{ marginBottom: '1rem', fontWeight: '600' }}
    >
      <ListSubheader sx={{ fontWeight: '600' }} component="p">
        {products.length === 0
          ? 'No Item Found'
          : `Showing 6 of ${totalProducts} items`}
      </ListSubheader>
    </ImageListItem>
    <ImageList
      gap={32}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >

      {!loading ? products.map((product) => (
        <Link to={`/product/${product.id}/details`} key={product.id}>
          <ProductsCategoryCard product={product} />
        </Link>
      )) : (
        // eslint-disable-next-line max-len
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40rem',
          }}
        >
          <CircularProgress
            color="primary"
          />
        </Box>
      )}

    </ImageList>
    <Box sx={{
      marginTop: '2rem', display: 'flex', justifyContent: 'center',
    }}
    >
      <Pagination
        sx={{ textAlign: 'center' }}
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={(e, p) => changeOffsetValue(Number(p) - 1)}
      />
    </Box>
  </Box>
);

export default ProductsCategory;
