import { FC, useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Image, Button } from '../index';
import { IUserRequest } from '../../interfaces';

const UserProductCard
:FC<{ product : IUserRequest, fetch:()=>void }> = ({ product, fetch }) => {
  const [productObj, setProductObj] = useState<IUserRequest | null>(null);

  useEffect(() => {
    setProductObj(product);
  }, [product]);

  const handleDelete = async () => {
    try {
      const alert = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#1b4b66',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (alert.isConfirmed) {
        await axios.delete(`/api/v1/products/${product.id}`);
        fetch();
      }
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  if (!productObj) return <p />;
  return (
    <Box className="request-card">
      <Image attributes={{
        src: product['productId.gallery'][0],
        alt: `an image of ${product['productId.title']}`,
        className: 'request-img',
      }}
      />
      <Box className="request-details">
        <h3
          className="request-title"
          id="title"
        >
          {productObj['productId.title']}
        </h3>
        <p
          className="request-description"
          id="description"
        >
          {productObj['productId.title']}
        </p>
        <Link to={`/product/${productObj.id}/details`}>View details</Link>

        <Box className="buttons">
          <Button
            style={{
              text: 'Edit',
            }}
          />
          <Button
            style={{
              text: 'Cancel',
              handleClick: handleDelete,
            }}
          />

        </Box>
      </Box>
    </Box>

  );
};

export default UserProductCard;
