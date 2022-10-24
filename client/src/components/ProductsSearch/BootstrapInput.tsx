import { InputBase, styled } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: '0 4px 4px 0',
    position: 'relative',
    backgroundColor: '#1B4B66',
    // color: '#FFF',
    border: '1px solid #ced4da',
    padding: '0.655rem 0.3rem',
    paddingLeft: '1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderColor: '#80bdff',
    },
  },
}));

export default BootstrapInput;
