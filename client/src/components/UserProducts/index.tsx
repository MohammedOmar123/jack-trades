/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserProductCard from './UserProductCard';
import { UserProduct } from '../../interfaces';
import './UserProducts.css';

const UserProducts:FC<{ products : UserProduct[] }> = ({ products }) => (
  <Box className="user-products">
    <Typography variant="h4">Products</Typography>
    <Box className="products">
      {products.map((e) => <UserProductCard product={e} key={e.id} />)}
    </Box>
  </Box>
);

export default UserProducts;
