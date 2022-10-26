/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import { Image, Button, Loading } from '../index';
import { UserProduct } from '../../interfaces';

const UserProductCard:FC<{ product : UserProduct }> = ({ product }) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [productObj, setProductObj] = useState<UserProduct | null>(null);

  useEffect(() => {
    setProductObj(product);
  }, [product]);

  const handleEdit = () => {
    console.log(product.id);

    setReadOnly(false);
  };

  const handleDelete = () => {
    console.log(product.id);
  };

  const saveEdit = () => {
    setReadOnly(true);
  };

  const handleChange = (e:any) => {
    const key = e.target.id; // title
    if (productObj) {
      let newVal;
      if (key === 'title') newVal = { ...productObj, title: e.target.value };
      else newVal = { ...productObj, description: e.target.value };
      setProductObj(newVal);
    }
  };

  if (!productObj) return <p>loading ...</p>;
  return (
    <Box className="product-card">
      <Image attributes={{
        src: product.gallery[0],
        alt: `an image of ${product.title}`,
        className: 'product-img',
      }}
      />
      <Box className="product-details">
        <InputBase
          className="title"
          id="title"
          value={productObj.title}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <InputBase
          className="description"
          id="description"
          value={productObj.description}
          readOnly={readOnly}
          onChange={handleChange}
        />
        <Box className="buttons">
          {
          readOnly ? (
            <Button
              style={{
                text: 'Edit',
                handleClick: handleEdit,
              }}
            />
          ) : (
            <Button
              style={{
                text: 'save',
                handleClick: saveEdit,
              }}
            />
          )
        }
          <Button
            style={{
              text: 'Delete',
              handleClick: handleDelete,
            }}
          />

        </Box>
      </Box>
    </Box>
  );
};

export default UserProductCard;
