import './AccountIntro.css';
import { Box, Typography } from '@mui/material';
import vector from '../../assets/homeIcon.png';
import Image from '../Image/Image';
import { IAccountProps } from '../../interfaces';

const AccountIntro = ({ title, text }: IAccountProps) => (
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
        {title}
      </Typography>
      <Typography>{text}</Typography>
    </Box>
  </Box>
);

export default AccountIntro;
