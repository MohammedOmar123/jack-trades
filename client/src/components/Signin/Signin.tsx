import { Box, Typography, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { IUserLogin } from '../../interfaces';
import FormHeader from '../FormHeader/FormHeader';
import Loading from '../Loading/Loading';
import './Signin.css';

const Signin:FC = () => {
// handle login
  const location = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (user:IUserLogin) => {
    try {
      setLoading(true);
      await axios.post('/api/v1/account/signin', user);
      setLoading(false);
      location('/');
    } catch (error) {
      setLoading(false);
      Swal.fire({
        titleText: error.response.data.message,
      });
    }
  };

  // validation
  const validationSchema = yup.object({
    email: yup.string()
      .email('Enter Valid Email ')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values:IUserLogin) => {
      login(values);
    },
  });
  return (
    <Box className="signIn-container">
      <FormHeader
        buttonText="SignUp"
        link="/Signup"
        title="You don't have account yet ?"
      />
      <Box className="form-container-signin">
        <Typography variant="h3">
          SignIn
        </Typography>
        <form onSubmit={(e) => formik.handleSubmit(e)}>
          <Box className="inputs-container">
            <TextField
              className="inputs"
              InputProps={{
                style: {
                  padding: '10px',
                },
              }}
              id="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={formik.handleChange}
              error={formik.touched.email
                    && Boolean(formik.errors.email)}
              helperText={formik.touched.email
                    && formik.errors.email}
            />
            <TextField
              className="inputs"
              InputProps={{
                style: {
                  padding: '10px',
                },
              }}
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="standard"
              onChange={formik.handleChange}
              error={formik.touched.password
                    && Boolean(formik.errors.password)}
              helperText={formik.touched.password
                    && formik.errors.password}
            />
            { loading ? <Loading className="loading" />
              : <button type="submit" className="submit-login"> Login </button>}

          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default Signin;
