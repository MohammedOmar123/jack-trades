// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Header.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderImage from '../../assets/headerImage.png';
import Button from '../Button/Button';

const Header = () => (
  <Box className="div-parent">
    <img className="img" src={HeaderImage} alt="introImage" />
    <Box className="div-intro">
      <Typography
        variant="h1"
        sx={{
          fontSize: 40,
          fontWeight: 800,
        }}
      >
        Exchange Your Items

      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: 18,
          width: 250,
          fontWeight: 600,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

      </Typography>

      <Button
        style={{
          text: 'See more',
          height: 35,
          width: 130,
          marginRight: 0,
          icon: true,
        }}
      />
    </Box>

  </Box>
);

export default Header;
