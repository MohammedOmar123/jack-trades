import { Box } from '@mui/material';
import { FC } from 'react';
import FormHeader from '../FormHeader/FormHeader';

const Signin:FC = () => (
  <Box>
    <FormHeader
      buttonText="SignUp"
      link="/Signup"
      title="You don't have account yet ?"
    />
  </Box>
);
export default Signin;
