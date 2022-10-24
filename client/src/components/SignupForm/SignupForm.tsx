import axios from 'axios';
import * as yup from 'yup';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';

import Button from '../Button/Button';

import IUser from '../../interfaces/Iuser';
import google from '../../assets/google.png';

import './SignupForm.css';

const SignupForm = () => {
  // validation

  const validationSchema = yup.object({
    firstName: yup.string()
      .matches(
        /^\s*[a-zA-z]{2,20}\s*$/,
        'Enter valid first name',
      )
      .required('First name is required'),
    lastName: yup
      .string().matches(
        /^\s*[a-zA-z]{2,20}$\s*/,
        'Enter valid last name',
      )
      .required('Last name is required'),
    email: yup.string()
      .email('Enter valid email')
      .required('Email is required'),
    password: yup.string()
      .matches(
        /^(?!.*[\s])(?=.*[0-9])(?=.*\W)[a-zA-Z0-9\W]{6,15}$/,
        `Password must be at least 6 characters
        and contain letters, digits and special characters only.`,
      ).required('password is required'),
    confirmPassword:
      yup.string().oneOf([yup.ref('password'), null], 'Password must be match'),
  });

  const location = useNavigate();
  // const [error, setError] = useState<string>('');
  const addNewUser = async (user:IUser) => {
    try {
      await axios.post('/api/v1/account/signup', user);
      location('/');
    } catch (err:unknown) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (user:IUser) => {
      addNewUser(user);
    },
  });

  return (
    <Box className="account-part">
      <form onSubmit={(e) => formik.handleSubmit(e)}>
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
          <Box className="inputs-names-container">
            <Box>
              <Typography className="p-inputs">First Name</Typography>
              <input
                className="names-inputs"
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="errors">
                  {formik.errors.firstName}
                  {' '}
                </div>
              ) : null}
            </Box>
            <Box>
              <Typography className="p-inputs">Last Name</Typography>
              <input
                className="names-inputs"
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="errors">
                  {formik.errors.lastName}
                  {' '}
                </div>
              ) : null}
            </Box>
          </Box>
          <Box className="inputs-mai-pass">
            <Typography className="p-inputs">Mail Address</Typography>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="errors">
                {formik.errors.email}
                {' '}
              </div>
            ) : null}
          </Box>
          <Box className="inputs-mai-pass">

            <Typography className="p-inputs">Password</Typography>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errors">
                {formik.errors.password}
                {' '}
              </div>
            ) : null}
          </Box>
          <Box className="inputs-mai-pass">
            <Typography className="p-inputs">Confirm Password</Typography>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="errors">
                {formik.errors.confirmPassword}
                {' '}
              </div>
            ) : null}
          </Box>
          <Box className="buttons-container">
            <button
              type="submit"
              className="btn create-account-btn"
            >
              Create my account
            </button>
            <Typography className="or">or</Typography>
            <button
              type="submit"
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
      </form>
      {/* <Box>{error}</Box> */}
    </Box>
  );
};
export default SignupForm;
