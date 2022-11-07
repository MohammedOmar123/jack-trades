/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FC, useState, useEffect, useRef,
} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  Box, Typography, Pagination, Stack,
} from '@mui/material';
import WishlistCard from './WishlistCard';
import { IWishlistItem } from '../../interfaces';

const Wishlist:FC = () => {
  const [wishlist, setWishlist] = useState<IWishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(1);

  const pageNumber = useRef(1);
  const { userId } = useParams();

  const fetchData = async () => {
    try {
      const userWishlist = await axios
        .get(`/api/v1/wishlist?offset=${offset}&limit=3`);

      setWishlist(userWishlist.data.rows);
      setCount(userWishlist.data.count);
      setIsLoading(false);
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    if (value > pageNumber.current) setOffset(offset + 3);
    else setOffset(offset - 3);

    pageNumber.current = value;
  };

  if (isLoading || !wishlist) return <h1>loading..</h1>;
  return (
    <Box className="user-products">
      <Typography variant="h4">Wishlist</Typography>
      <Box className="products">
        {wishlist.map((e) => (
          <WishlistCard
            product={e}
            key={e.id}
            fetch={fetchData}
          />
        ))}
      </Box>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(count / 3)} onChange={handleChange} />
      </Stack>
    </Box>
  );
};

export default Wishlist;
