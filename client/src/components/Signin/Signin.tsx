import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import './Signin.css';

const Signin:FC = () => (
  <Box className="signIn-container">
    <FormHeader
      buttonText="SignUp"
      link="/Signup"
      title="You don't have account yet ?"
    />
    <Box className="form-container-signin">
      <Typography variant="h3">
        Login
      </Typography>
      <Box className="inputs-container">

        <Box className="email">
          <Typography variant="subtitle2">
            Email
            <input type="email" value="" placeholder="example@gmail.com" />
          </Typography>
        </Box>

        <Box className="password">
          <Typography variant="subtitle2">
            Password
          </Typography>
          <input type="password" value="" placeholder="*******" />
        </Box>

      </Box>
    </Box>
  </Box>
);
export default Signin;
