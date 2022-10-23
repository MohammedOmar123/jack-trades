/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { UserInfo, UserProducts, Loading } from '../components';
import { UserProduct, UserInfoTypes } from '../interfaces';

const ProfilePage:FC = () => {
  const [products, setProducts] = useState< UserProduct[] | null>(null);
  const [info, setInfo] = useState<UserInfoTypes | null >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const userProducts = await axios.get('/api/v1/user/1/products');
        const userInfo = await axios.get('/api/v1/user/1');

        setProducts(userProducts.data);
        setInfo(userInfo.data);
        setIsLoading(false);
      } catch (error) {
        alert('somthing went wrong');
      }
    })();
  }, []);

  if (isLoading || (!info || !products)) return <Loading />;
  return (
    <Box className="user-profile">
      <UserInfo info={info} />
      <UserProducts products={products} />
    </Box>
  );
};

export default ProfilePage;
