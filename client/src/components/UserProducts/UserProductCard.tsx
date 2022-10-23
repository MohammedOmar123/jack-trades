/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Image, Button } from '../index';
import { UserProduct } from '../../interfaces';

const UserProductCard:FC<{ product : UserProduct }> = ({ product }) => {
  const handleEdit = (id:string) => {
    console.log(id);
  };

  const handleDelete = (id:string) => {
    console.log(id);
  };

  return (
    <Box className="product-card">
      <Image attributes={{
        src: product.gallery[0],
        alt: `an image of ${product.title}`,
        className: 'product-img',
      }}
      />
      <Box className="product-details">
        <Typography variant="h5">{product.title}</Typography>
        <Typography>
          {product.description}
        </Typography>
        <Box className="buttons">
          <Button
            style={{
              text: 'Edit',
              handleClick: () => { handleEdit(product.id); },
            }}
          />
          <Button
            style={{
              text: 'Delete',
              handleClick: () => { handleDelete(product.id); },
            }}
          />

        </Box>
      </Box>
    </Box>
  );
};

export default UserProductCard;

// <Button
// // style={{
// //   text: 'Edit', height: 40, width: 100, marginRight: 1, icon: false,
// // }}
// > </Button>
// <Button
// // style={{
// //   text: 'Delete', height: 40, width: 100, marginRight: 1, icon: false,
// // }}
// />
