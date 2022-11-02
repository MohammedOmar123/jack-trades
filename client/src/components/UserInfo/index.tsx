/* eslint-disable max-len */
import './UserInfo.css';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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
    <Box className="user-nav">
      <Box>
        <Link to={`/profile/${info.id}`}>
          <Button style={{
            text: 'Products',
            classes: 'list',
          }}
          />
        </Link>
        <Link to="wishlist">
          <Button style={{
            text: 'Wishlist',
            classes: 'list',
          }}
          />
        </Link>
        <Link to="requests">
          <Button style={{
            text: 'Requests',
            classes: 'list',
          }}
          />
        </Link>
      </Box>
      {/* ====== */}
      <Box>
        <Link to="/newProduct">
          <Button style={{
            text: 'Add Product',
            classes: 'userInfoBtn',
          }}
          />
        </Link>
        <Button style={{
          text: 'Edit Profile',
          classes: 'userInfoBtn',
        }}
        />
      </Box>
    </Box>
  </Box>
);

export default UserInfo;
