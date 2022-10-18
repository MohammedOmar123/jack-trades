import { FC } from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ButtonPropsTypes } from '../../interfaces/index';
import './Button.css';
// eslint-disable-next-line max-len
const ButtonComponent: FC<ButtonPropsTypes> = ({
  style: {
    width, height, marginRight, text, icon,
  },
}) => (
  <Button
    type="button"
    className="navButton"
    variant="contained"
    sx={{
      textTransform: 'none',
      background: '#1B4B66',
      color: 'white',
      width,
      height,
      marginRight,
      ':hover': {
        color: 'black',
        background: 'white',
      },
    }}
    startIcon={icon ? <ArrowForwardIcon /> : ''}
  >
    {text}
  </Button>
);

export default ButtonComponent;
