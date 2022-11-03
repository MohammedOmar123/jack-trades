/* eslint-disable max-len */
import {
  Autocomplete, Box, TextField,
} from '@mui/material';
import { FC } from 'react';
import { IProducts } from '../../interfaces';

const ProductsSearch: FC<{ titles: IProducts[], changeSearchValue: (value: any) => void }> = ({ titles, changeSearchValue }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 0px 10px rgba(27, 75, 102, 0.25)',
    fontSize: '1.2rem',
  }}
  >
    <Autocomplete
      fullWidth
      id="free-solo-demo"
      freeSolo
      options={titles.map((title) => title.title)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label="freeSolo" />}
      onChange={(e, value) => changeSearchValue(value)}
    />
  </Box>
);

export default ProductsSearch;
