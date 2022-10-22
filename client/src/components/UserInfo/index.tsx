/* eslint-disable max-len */
import './UserInfo.css';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Image, Button } from '../index';
import { UserInfoTypes } from '../../interfaces';

const UserInfo:FC<{ info: UserInfoTypes }> = ({ info }) => (
  <Box className="user-info">
    <Image attributes={{
      src: info.image,
      alt: `An image of ${info.first_name} ${info.last_name}`,
      className: 'user-img',
    }}
    />
    <Typography variant="h4">
      {info.first_name}
      {' '}
      {info.last_name}
    </Typography>
    <Typography>
      {info.bio}
    </Typography>
    <Button style={{
      width: 170, height: 30, marginRight: 0, text: 'Add new item', icon: false,
    }}
    />
  </Box>
);

export default UserInfo;
