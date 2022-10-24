/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Info, Search } from '@mui/icons-material';
import {
  Box, FormControl, IconButton, ImageListItem, ImageListItemBar, Input, InputAdornment, InputBase, InputLabel, MenuItem, NativeSelect, OutlinedInput, Select, styled, TextField,
} from '@mui/material';
import BootstrapInput from './BootstrapInput';

const ProductsSearch = () => (
  <Box sx={{
    display: 'flex', alignItems: 'center', padding: '0.5rem', fontSize: '1.2rem',
  }}
  >
    <FormControl variant="standard" sx={{ width: '70%' }}>
      <Input
        sx={{
          fontWeight: 'bolder',
          padding: '.3rem .3rem',
          fontSize: '1rem',
          border: '1.5px solid #CCC',
          borderRadius: '4px 0 0 4px',
          '&::before': { borderBottom: 'none' },
          '&::focus': { borderBottom: '0' },
          '&:hover': { '&::after': { borderBottom: 'none' } },
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
