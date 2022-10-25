import './SignupIntro.css';
import { Box, Typography } from '@mui/material';
import vector from '../../assets/homeIcon.png';
import Image from '../Image/Image';

const SignupIntro = () => (
  <Box className="welcome-part">
    <Box className="header">
      <Image attributes={{
        src: vector, alt: 'icon', className: 'signupIcon',
      }}
      />
      <Typography>Home</Typography>
    </Box>
    <Box className="content">
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
        }}
      >
        WELCOME TO AWESOMENESS

      </Typography>
      <Typography>Please create your free account to proceed</Typography>
    </Box>
  </Box>
);

export default SignupIntro;
