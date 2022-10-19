/* eslint-disable max-len */
import {
  Box, Container, Typography,
} from '@mui/material';

import './Statistics.css';

const containerStyle = {
  // outline: '1px solid',
  width: '25rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const typoStyle = {
  letterSpacing: '.1rem',
};

const Statistics = () => (
  <Box
    bgcolor="#3388b8"
    height="15rem"
    display="flex"
    pr="8rem"
    pl="8rem"
  >
    <Container sx={containerStyle} disableGutters>
      <Typography variant="h3" fontWeight="bolder">70</Typography>
      <Typography
        sx={typoStyle}
        variant="subtitle2"
        fontSize="1.3rem"
        fontWeight="bold"
        mt=".5rem"
      >
        Contributions

      </Typography>
    </Container>
    <Container sx={containerStyle} disableGutters>
      <Typography variant="h3" fontWeight="bolder">20</Typography>
      <Typography
        sx={typoStyle}
        variant="subtitle2"
        fontSize="1.3rem"
        fontWeight="bold"
        mt=".5rem"
      >
        Exchanges

      </Typography>
    </Container>
    <Container sx={containerStyle} disableGutters>
      <Typography variant="h3" fontWeight="bolder">50</Typography>
      <Typography
        sx={typoStyle}
        variant="subtitle2"
        fontSize="1.3rem"
        fontWeight="bold"
        mt=".5rem"
      >
        Donations

      </Typography>
    </Container>
  </Box>
);

export default Statistics;
