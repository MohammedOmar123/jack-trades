import { FC } from 'react';
import './Navbar.css';
import {
  Toolbar, AppBar, Typography, Link,
} from '@mui/material';
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
                  sx={{
                    color: 'black',
                    ':hover': {
                      color: 'rgba(27, 75, 102, 1)',
                    },
                  }}
                  className="a"
                  href={link.path}
                  underline="none"
                >
                  {link.content}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <ButtonComponent style={{
        height: 35,
        width: 100,
        marginRight: 1,
        text: 'Join Us',
        icon: false,
      }}
      />
    </Toolbar>
  </AppBar>
);

export default Navbar;
