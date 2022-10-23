import { FC } from 'react';
import './Navbar.css';
import {
  Toolbar, AppBar, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Button/Button';
import { links } from '../../StaticData';

const Navbar: FC = () => (
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
              <li>
                <Link
<<<<<<< HEAD
                  sx={{
                    color: 'black',
                    ':hover': {
                      color: 'rgba(27, 75, 102, 1)',
                    },
                  }}
                  className="a"
                  href={link.path}
                  underline="none"
=======
                  className="link"
                  to={link.path}
>>>>>>> e003d2ab7e939c06a7dfa4766ad31644c93626c1
                >
                  {link.content}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <ButtonComponent style={{
        text: 'Join Us',
        icon: '',
        classes: 'btn navbar-btn',
      }}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;
