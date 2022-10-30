import { FC } from 'react';
import {
  Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel,
} from '@mui/material';

const CategoryRadio:FC = () => (
  <FormControl className="category">
    <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel
        value="Clothes"
        control={<Radio />}
        label="Clothes"
      />
      <FormControlLabel
        value="Furniture"
        control={<Radio />}
        label="Furniture"
      />
      <FormControlLabel
        value="Books"
        control={<Radio />}
        label="Books"
      />
      <FormControlLabel
        value="Accessories"
        control={<Radio />}
        label="Accessories"
      />
      <FormControlLabel
        value="Electronics"
        control={<Radio />}
        label="Electronics"
      />
      <FormControlLabel
        value="Other"
        control={<Radio />}
        label="Other"
      />
    </RadioGroup>
  </FormControl>
);

export default CategoryRadio;
