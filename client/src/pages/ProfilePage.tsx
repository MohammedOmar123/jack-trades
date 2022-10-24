/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { UserInfo, UserProducts, Loading } from '../components';
import { UserProduct, UserInfoTypes } from '../interfaces';

const ProfilePage:FC = () => {
  const [products, setProducts] = useState< UserProduct[] | null>(null);
  const [info, setInfo] = useState<UserInfoTypes | null >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { userId } = useParams();

  const fetchData = async () => {
    try {
      const userProducts = await axios.get(`/api/v1/user/${userId}/products`);
      const userInfo = await axios.get(`/api/v1/user/${userId}`);

      setProducts(userProducts.data);
      setInfo(userInfo.data);
      setIsLoading(false);
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
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
