import './Header.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../Button/Button';

const Header = () => (
  <Box className="div-parent">
    <Box className="div-intro">
      <Typography
        variant="h1"
        sx={{
          fontSize: '3.5rem',
          fontWeight: '800 !important',
        }}
      >
        Exchange Your Items

      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '20px',
          paddingRight: '10rem',
          fontWeight: '800 !important',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        amet consectetur adipisicing elit.

      </Typography>

      <Button
        style={{
          text: 'See more',
          height: 35,
          width: 150,
          marginRight: 0,
          icon: true,
        }}
      />
    </Box>

  </Box>
);

export default Header;
