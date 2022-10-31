import { FC, ChangeEvent } from 'react';
import {
  Radio, RadioGroup, FormControlLabel,
  FormControl, FormLabel,
} from '@mui/material';
import { ITypeRadioProps } from '../../interfaces';

const TypeRadio:FC<ITypeRadioProps> = ({ setType }) => {
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  return (
    <FormControl className="type">
      <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value="donation"
          control={<Radio />}
          label="Donation"
        />
        <FormControlLabel
          value="exchange"
          control={<Radio />}
          label="Exchange"
        />
      </RadioGroup>
    </FormControl>
  );
};
export default TypeRadio;
