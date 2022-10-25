import { Box } from '@mui/material';
import SignupIntro from '../components/SignupIntro/SignupIntro';
import SignupForm from '../components/SignupForm/SignupForm';

const SignUp = () => (
  <Box className="signup-container">
    <SignupIntro />
    <SignupForm />
  </Box>
);

export default SignUp;
