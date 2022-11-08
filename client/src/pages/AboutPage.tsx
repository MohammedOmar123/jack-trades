import { FormatQuote } from '@mui/icons-material';
import {
  Stack, Typography, styled, Container, Box, Avatar,
} from '@mui/material';

const CustomTypeograph = styled(Typography)(({ theme }) => ({
  fontFamily: "'Cairo', sans-serif",
  paddingBottom: '0.8rem',
  position: 'relative',
  fontWeight: 'bold',
  marginBottom: '2rem',
  textAlign: 'center',
  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: '0px',
    left: 'calc(50% - 3rem)',
    width: '6rem',
    height: '3px',
    backgroundColor: 'black',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
}));

const CustomBox = styled(Box)({
  width: '30rem',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 1.5rem 0.5rem 2.3rem',
  border: '1px solid rgba(0,0,0,0.07)',
  boxShadow: '0px 30px 60px rgba(27,75,102, 0.15)',
  borderRadius: '25px',
  marginBottom: '2rem',
});

const FeedbackCard = () => (
  <CustomBox>
    <Box sx={{ width: '70%' }}>
      <FormatQuote fontSize="large" />
      <Typography variant="subtitle1" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugit rerum omnis vitae error quis ea itaque.
      </Typography>
      <Typography
        variant="h6"
        mt={0.6}
        fontWeight="bolder"
        fontFamily="'Cairo', sans-serif"
      >
        Jhon Doe

      </Typography>
    </Box>
    <Avatar
      sx={{ margin: '0 auto', width: 80, height: 80 }}
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
    />
  </CustomBox>
);

const AboutPage = () => (
  <Container>
    <Stack alignItems="center" p="3rem">
      <CustomTypeograph variant="h4">
        What our little friends say about us
      </CustomTypeograph>
    </Stack>
    <Stack direction="row" flexWrap="wrap" justifyContent="space-around">
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </Stack>
  </Container>
);

export default AboutPage;
