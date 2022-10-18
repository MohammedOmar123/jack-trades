import { FC } from 'react';
import { Button } from '@mui/material';
import { ButtonPropsTypes } from '../../interfaces/index';

// eslint-disable-next-line max-len
const ButtonComponent:FC<ButtonPropsTypes> = ({
  style: {
    width, height, marginRight, text,
  },
}) => (
  <Button
    type="button"
    className="navButton"
    variant="contained"
    sx={{
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
  >
    { text }
  </Button>
);

export default ButtonComponent;
