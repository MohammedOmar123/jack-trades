/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { UserInfo, UserProducts } from '../components';
import { UserProduct, UserInfoTypes } from '../interfaces';

const ProfilePage:FC = () => {
  const [products, setProducts] = useState< UserProduct[] | null>(null);
  const [info, setInfo] = useState<UserInfoTypes | null >(null);

  useEffect(() => {
    (async () => {
      const userProducts = await axios.get('/api/v1/user/1/products');
      const userInfo = await axios.get('/api/v1/user/1');

      setProducts(userProducts.data);
      setInfo(userInfo.data);
    })();
  }, []);

  if (!products || !info) return <h1>loading ...</h1>;
  return (
    <Box className="user-profile">
      <UserInfo info={info} />
      <UserProducts products={products} />
    </Box>
  );
};

export default ProfilePage;
