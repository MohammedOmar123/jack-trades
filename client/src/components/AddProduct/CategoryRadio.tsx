import { FC, ChangeEvent } from 'react';
import {
  Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel,
} from '@mui/material';

import { ICategoryProps } from '../../interfaces';

const CategoryRadio:FC<ICategoryProps> = ({ setCategory }) => {
  const handleChange = (e:ChangeEvent) => {
    setCategory(e.target.id);
  };

  return (
    <FormControl className="category">
      <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value="Clothes"
          control={<Radio id="1" />}
          label="Clothes"
        />
        <FormControlLabel
          value="Furniture"
          control={<Radio id="2" />}
          label="Furniture"
        />
        <FormControlLabel
          value="Books"
          control={<Radio id="3" />}
          label="Books"
        />
        <FormControlLabel
          value="Accessories"
          control={<Radio id="4" />}
          label="Accessories"
        />
        <FormControlLabel
          value="Electronics"
          control={<Radio id="5" />}
          label="Electronics"
        />
        <FormControlLabel
          value="Other"
          control={<Radio id="6" />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryRadio;
