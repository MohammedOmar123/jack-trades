import {
  FC, useState, useContext, useEffect,
} from 'react';
import './Navbar.css';
import {
  Badge,
  Toolbar, AppBar, Typography, Box, Menu, MenuItem,
} from '@mui/material';
import {
  NotificationsNone,
  PersonOutline, KeyboardArrowDown,
} from '@mui/icons-material/';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import ButtonComponent from '../Button/Button';
import { links } from '../../StaticData';
import { AuthContext } from '../Context/AuthContext';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { userId, setUserId, socket } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement >();
  const [open, setOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<number>(0);
  const [dataObj, setDataObj] = useState({});

  // start socket

  const fetchNotifications = async () => {
    try {
      const { data } = await axios.get('/api/v1/notifications/unseen');
      const { received, sent } = data;
      setDataObj(data);
      setNotification([...received, ...sent].length);
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
    });
    if (userId) {
      socket?.emit('newUser', userId);
    }
    socket?.on('sendNotification', () => {
      setNotification((prev) => prev + 1);
    });
    socket?.on('toast', ({ senderName, type }) => {
      switch (type) {
        case 'request':
          toast(`${senderName} requested your item`);
          break;
        case 'decline':
          toast(`${senderName} decline your item`);
          break;
        case 'approve':
          toast(`${senderName} approved your item`);
          break;
        default: toast('you have new notification');
          break;
      }
    });
  }, [userId]);

  // end socket

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
        position: 'sticky',
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
        {/* if the user authorize display the menu,
         if not display join us button */}
        { userId
          ? (
            <Box sx={{
              display: 'flex',
              gap: '6px',
            }}
            >
              <div
                onClick={() => {
                  setNotification(0);
                  navigate('/notifications', {
                    state: dataObj,
                  });
                }}
                style={{
                  cursor: 'pointer',
                }}
                role="button"
                aria-hidden="true"
              >
                <Badge badgeContent={notification} color="primary">

                  <NotificationsNone sx={{
                    color: 'black',
                    fontSize: '25px',
                  }}
                  />
                </Badge>
              </div>

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
              <ToastContainer style={{
                marginTop: '40px',
              }}
              />
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
