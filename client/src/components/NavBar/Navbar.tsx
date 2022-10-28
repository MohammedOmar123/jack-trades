import {
  FC, useState, useContext,
} from 'react';
import './Navbar.css';
import {
  Toolbar, AppBar, Typography, Box, Menu, MenuItem,
} from '@mui/material';
import {
  NotificationsNone,
  PersonOutline, KeyboardArrowDown,
} from '@mui/icons-material/';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ButtonComponent from '../Button/Button';
import { links } from '../../StaticData';
import { AuthContext } from '../Context/AuthContext';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement >();
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleSignOut = async () => {
    try {
      await axios.post('/api/v1/account/logout');
      navigate('/');
      setUserId(0);
    } catch (error) {
      const { message } = error.response.data;
      Swal.fire({
        title: 'Failed To Signout',
        text: message,
        icon: 'error',
      });
    }
  };
  return (
    <AppBar
      sx={{
        background: 'white',
        boxShadow: '0 4px 4px -2px rgba(0,0,0,.2)',
      }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Typography
          variant="h4"
          sx={{ color: '#1B4B66' }}
        >
          Jack  Trades
        </Typography>
        <div className="navbar">
          <ul>
            {
            links.map((link) => (
              <li key={link.id}>
                <Link
                  className="link"
                  to={link.path}
                >
                  {link.content}
                </Link>
              </li>
            ))
          }
          </ul>
        </div>
        { userId
          ? (
            <Box sx={{
              display: 'flex',
              gap: '6px',
            }}
            >
              <NotificationsNone sx={{
                color: 'black',
                fontSize: '25px',
                cursor: 'pointer',
              }}
              />
              {' '}
              <PersonOutline sx={{
                color: 'black',
                fontSize: '25px',
                cursor: 'pointer',

              }}
              />
              <div
                onClick={handleOpen}
                style={{
                  width: '20px',
                  cursor: 'pointer',
                }}
                role="button"
                aria-hidden="true"
              >
                <KeyboardArrowDown sx={{
                  color: 'black',
                  fontSize: '25px',
                }}
                />
              </div>
              <Menu
                onClose={handleClose}
                anchorEl={anchorEl}
                open={open}
                PaperProps={{
                  style: {
                    backgroundColor: '#fff',
                  },
                }}
              >
                <MenuItem onClick={() => {
                  handleClose();
                  navigate(`/profile/${userId}`);
                }}
                >
                  Profile

                </MenuItem>
                <MenuItem onClick={handleClose}>
                  My Requests
                </MenuItem>
                <MenuItem onClick={() => {
                  handleSignOut();
                  handleClose();
                }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )

          : (
            <Link
              to="signup"
              style={{
                textDecoration: 'none',
              }}
            >
              <ButtonComponent style={{
                text: 'Join Us',
                icon: '',
                classes: 'btn navbar-btn',
              }}
              />
            </Link>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
