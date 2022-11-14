/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import './UserInfo.css';
import {
  FC, useState, useContext, useEffect,
} from 'react';
import {
  Box, Typography, Avatar, Tab, Tabs,
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserInfoTypes } from '../../interfaces';
import { Image, Button, Popup } from '../index';
import { AuthContext } from '../Context/AuthContext';

const UserInfo:FC<{ info: UserInfoTypes, handleIsOpen: () => void }> = ({ info, handleIsOpen }) => {
  const [value, setValue] = useState('products');
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const location = useLocation().pathname.split('/');
  const endpoint = location[location.length - 1];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    if (newValue === 'products') navigate(`/profile/${info.id}`);
    else navigate(newValue);
  };
  const OpenPopup = () => {
    setIsPopupOpen(true);
  };
  useEffect(() => {
    if (endpoint === 'wishlist' || endpoint === 'requests') setValue(endpoint);
  }, []);

  return (
    <Box className="user-info">
      {info.image ? (
        <Image attributes={{
          src: info.image,
          alt: `An image of ${info.first_name} ${info.last_name}`,
          className: 'user-img',
        }}
        />
      ) : (
        <Avatar sx={{ bgcolor: '#B9E0FF' }} className="user-img">
          {info.first_name[0]}
          {info.last_name[0]}
        </Avatar>
      )}

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
          <Popup isOpen={isPopupOpen} />
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="products" label="Products" />
            {userId === +info.id && <Tab value="wishlist" label="Wishlist" />}
            {userId === +info.id && <Tab value="requests" label="Requests" />}
          </Tabs>
        </Box>
        {/* ====== */}
        { userId === +info.id && (
        <Box className="profile-btn">
          <Link to="/newProduct">
            <Button style={{
              text: 'Add Product',
              classes: 'userInfoBtn',
            }}
            />
          </Link>
          <Button style={{
            text: 'Edit Profile',
            handleClick: OpenPopup,
            classes: 'userInfoBtn',

          }}
          />
        </Box>
        )}
        {userId !== +info.id && (
        <Box className="profile-btn">
          <button type="button" onClick={handleIsOpen}>Send message</button>
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserInfo;
