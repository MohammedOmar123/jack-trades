/* eslint-disable max-len */
import {
  Box, List, ListItem, ListItemText,
} from '@mui/material';

const Statistics = () => (
  <Box sx={{
    width: '100%',
    height: '20rem',
    backgroundColor: '#3388b8',
  }}
  >
    <List>
      <ListItem sx={{
        border: '1px solid',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        gap: '5rem',
        padding: '2rem 6rem',
      }}
      >
        <ListItemText sx={{ border: '1px solid', width: '5rem' }} primary="hello" />
        <ListItemText sx={{ border: '1px solid' }} primary="hello" />
        <ListItemText sx={{ border: '1px solid' }} primary="hello" />
      </ListItem>
    </List>

  </Box>
);

export default Statistics;
