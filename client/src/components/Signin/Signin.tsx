// import { Box, Typography, TextField } from '@mui/material';
// import { FC } from 'react';
// // import axios from 'axios';
// import * as yup from 'yup';
// import FormHeader from '../FormHeader/FormHeader';
// import './Signin.css';
// // import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// // import Swal from 'sweetalert2';

// const Signin:FC = () =>
// // const login = (email:string, password:string) => {

//   // };
//   // const validationSchema = yup.object({
//   //   email: yup.string()
//   //     .email('Enter Valid Email ')
//   //     .required('Email is required'),
//   //   password: yup.string().required('Password is required'),
//   // });
//   // const formik = useFormik({
//   //   initialValues: {
//   //     email: '',
//   //     password: '',
//   //   },
//   //   validationSchema,
//   //   onSubmit: (email:string, password:string) => {
//   //     login(email, password);
//   //   },
//   // });
//   (
//     <Box className="signIn-container">
//       <FormHeader
//         buttonText="SignUp"
//         link="/Signup"
//         title="You don't have account yet ?"
//       />
//       <Box className="form-container-signin">
//         <Typography variant="h3">
//           Login
//         </Typography>
//         <Box className="inputs-container">
//           <TextField
//             inputProps={{
//               style: {
//                 padding: '0px',
//               },
//             }}
//             className="inputs"
//             id="email"
//             name="email"
//             label="First name"
//             variant="standard"
//             onChange={formik.handleChange}
//             error={formik.touched.email
//                     && Boolean(formik.errors.email)}
//             helperText={formik.touched.email
//                     && formik.errors.email}
//           />
//           <TextField
//             inputProps={{
//               style: {
//                 padding: '0px',
//               },
//             }}
//             className="inputs"
//             id="email"
//             name="email"
//             label="First name"
//             variant="standard"
//             onChange={formik.handleChange}
//             error={formik.touched.password
//                     && Boolean(formik.errors.password)}
//             helperText={formik.touched.password
//                     && formik.errors.password}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// export default Signin;
