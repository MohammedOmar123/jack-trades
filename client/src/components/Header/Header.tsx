import './Header.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../Button/Button';

const Header = () => (
  <Box className="div-parent">
    <Box className="div-intro">
      <h1>
        Exchange Your Items
      </h1>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: '1.2rem',
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
