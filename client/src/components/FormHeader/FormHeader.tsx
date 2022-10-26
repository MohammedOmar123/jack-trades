import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { IFormHeaderProps } from '../../interfaces';

const FormHeader = ({ title, link, buttonText } : IFormHeaderProps) => (
  <Box className="header-2">
    <Typography sx={{
      marginTop: '10px',
    }}
    >
      {title}
    </Typography>
    <Link
      to={link}
      style={{
        textDecoration: 'none',
      }}
    >
      <Button style={{
        text: buttonText,
        classes: 'btn btn-login',
      }}
      />
    </Link>
  </Box>
);

export default FormHeader;
