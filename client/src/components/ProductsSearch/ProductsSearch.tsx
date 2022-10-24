/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AccountCircle } from '@mui/icons-material';
import {
  Box, FormControl, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select,
} from '@mui/material';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const ProductsSearch = () => (
  <FormControl variant="standard">
    <Input
      id="input-with-icon-adornment"
      startAdornment={(
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
          )}
    />
    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
      <Select
        multiple
        displayEmpty
        value="sdfdsf"
        input={<OutlinedInput />}

      >
        <MenuItem />
        {/* <em>lskdjflks</em> */}
        {/* <MenuItem disabled value="">
          <em>Placeholder</em>
        </MenuItem>
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))} */}
      </Select>
    </FormControl>
  </FormControl>
);

export default ProductsSearch;
