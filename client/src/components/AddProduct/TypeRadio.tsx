import { FC } from 'react';
import {
  Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel,
} from '@mui/material';

const TypeRadio:FC = () => (
  <FormControl className="type">
    <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel
        value="Donation"
        control={<Radio />}
        label="Donation"
      />
      <FormControlLabel
        value="Exchange"
        control={<Radio />}
        label="Exchange"
      />
    </RadioGroup>
  </FormControl>
);
export default TypeRadio;
