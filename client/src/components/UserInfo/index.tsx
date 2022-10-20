/* eslint-disable max-len */
import './UserInfo.css';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Image, Button } from '../index';

const UserInfo:FC = () => (
  <Box className="user-info">
    <Image attributes={{
      src: 'https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png',
      alt: 'user',
      className: 'user-img',
    }}
    />
    <Typography variant="h4"> Sarsar </Typography>
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ullam quos iste eum natus tempora fuga nemo,
      nobis, sunt qui omnis culpa quis esse cupiditate ducimus impedit sapiente vel, alias ad?
    </Typography>
    <Button style={{
      width: 170, height: 30, marginRight: 0, text: 'Add new item', icon: false,
    }}
    />
  </Box>
);

export default UserInfo;
