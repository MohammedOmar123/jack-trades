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
