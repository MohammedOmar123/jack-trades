import axios from 'axios';

import { Box, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';

import IUser from '../../interfaces/Iuser';
import google from '../../assets/google.png';

import './SignupForm.css';

const SignupForm = () => {
  const [user, setUser] = useState<IUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const addNewUser = async () => {
    try {
      const response = await axios.post('/api/v1/account/signup', user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <Box className="account-part">
      <Box className="header-2">
        <Typography sx={{
          marginTop: '10px',
        }}
        >
          Already signed up?
        </Typography>
        <Link
          to="/signin"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button style={{
            text: 'login',
            classes: 'btn btn-login',
          }}
          />
        </Link>
      </Box>
      <Box className="content-2">
        <Typography variant="h2">Create Free account</Typography>
        <Box className="inputs-names">
          <Box>
            <Typography className="p-inputs">First Name</Typography>
            <input
              type="text"
              placeholder="Type Your First Name"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev, firstName: e.target.value,
                }));
              }}
            />
          </Box>
          <Box>
            <Typography className="p-inputs">Last Name</Typography>
            <input
              type="text"
              placeholder="Type Your Last Name"
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev, lastName: e.target.value,
                }));
              }}
            />
          </Box>
        </Box>
        <Box className="inputs-mai-pass">
          <Typography className="p-inputs">Mail Address</Typography>
          <input
            type="email"
            placeholder="myemail@gmail.com"
            onChange={(e) => {
              setUser((prev) => ({
                ...prev, email: e.target.value,
              }));
            }}
          />
        </Box>
        <Box className="inputs-mai-pass">

          <Typography className="p-inputs">Password</Typography>
          <input
            type="password"
            placeholder="enter password"
            onChange={(e) => {
              setUser((prev) => ({
                ...prev, password: e.target.value,
              }));
            }}
          />
        </Box>
        <Box className="inputs-mai-pass">
          <Typography className="p-inputs">Confirm Password</Typography>
          <input
            type="password"
            placeholder="Confirm Your Password"
            onChange={(e) => {
              setUser((prev) => ({
                ...prev, confirmPassword: e.target.value,
              }));
            }}
          />
        </Box>
        <Box className="buttons">
          <button
            type="button"
            className="btn create-account-btn"
            onClick={addNewUser}
          >
            Create my account
          </button>
          <Typography className="or">or</Typography>
          <button
            type="button"
            className="google"
            style={{ cursor: 'pointer' }}
          >
            <img src={google} alt="" />
            <Typography> sign up with Google</Typography>
          </button>
          <Typography
            className="terms"
            sx={{
              fontSize: '12px',
            }}
          >
            By signing up, you agree
            with our communications and usage terms
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default SignupForm;
