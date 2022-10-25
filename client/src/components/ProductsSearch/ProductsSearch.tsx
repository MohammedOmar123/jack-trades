/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Info, Search } from '@mui/icons-material';
import {
  Box, FormControl, Input, InputAdornment, NativeSelect,
} from '@mui/material';
import BootstrapInput from './BootstrapInput';

const ProductsSearch = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 0px 10px rgba(27, 75, 102, 0.25)',
    fontSize: '1.2rem',
  }}
  >
    <FormControl variant="standard" sx={{ width: '75%' }}>
      <Input
        sx={{
          fontWeight: 'bolder',
          padding: '.4rem .3rem',
          fontSize: '1rem',
          borderRadius: '4px 0 0 4px',
          '&::before': { borderBottom: 'none' },
          // '&::focus': { borderBottom: '0' },
          // '&:hover': { '&::before': { borderBottom: 'none' } },
        }}
        id="input-with-icon-adornment"
        placeholder="Search for products or brands....."
        startAdornment={(
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
          )}
      />
    </FormControl>
    <FormControl variant="standard" sx={{ width: '25%' }}>
      <NativeSelect
        id="demo-customized-select-native"
        input={<BootstrapInput />}
      >
        <option value={10}>All</option>
        <option value={20}>Ten</option>
        <option value={30}>Twenty</option>
        <option value={40}>Thirty</option>
      </NativeSelect>
    </FormControl>
  </Box>
);

export default ProductsSearch;
