/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import {
  Box, Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, Typography,
} from '@mui/material';
import { FC } from 'react';
import { ICategories } from '../../interfaces';

const ProductsFilter: FC<{ categories: ICategories[], category: number[], changeTypeValue: (value: string) => void, changeDateValue: (value: string) => void, changeCategoryValue: (value: number, index:number) => void }> = ({
  categories, category, changeTypeValue, changeDateValue, changeCategoryValue,
}) => (
  <Box
    sx={{
      boxShadow: '0px 0px 10px rgba(27, 75, 102, 0.25)',
      marginBottom: '3rem',
      borderRadius: '5px',
      overflow: 'hidden',
      height: '100%',
    }}
  >
    <Typography
      bgcolor="#1B4B66"
      letterSpacing={2}
      fontWeight="800"
      variant="h5"
      padding="0.7rem 1.5rem"
      color="#FFF"
    >
      Filter
    </Typography>
    <Box sx={{
      padding: '1.2rem 1.5rem',
      borderBottom: '1px solid #CCC',
    }}
    >
      <Typography
        variant="h6"
        mb="1rem"
        fontWeight="600"
      >
        Category
      </Typography>
      {categories.map((cat) => (
        <FormGroup
          key={cat.id}
          sx={{
            marginLeft: '1rem',
          }}
        >
          <FormControlLabel
            control={(
              <Checkbox
                onChange={(e) => {
                  const index = category.indexOf(cat.id);
                  changeCategoryValue(cat.id, index);
                }}
              />
)}
            label={cat.name}
          />
        </FormGroup>
      ))}
    </Box>
    <Box sx={{
      padding: '1.2rem 1.5rem',
      borderBottom: '1px solid #CCC',
    }}
    >
      <Typography
        variant="h6"
        mb="1rem"
        fontWeight="600"
      >
        Date
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel value="newest" control={<Radio onChange={(e) => changeDateValue(e.currentTarget.value)} />} label="newest" />
        <FormControlLabel value="oldest" control={<Radio onChange={(e) => changeDateValue(e.currentTarget.value)} />} label="oldest" />
      </RadioGroup>
    </Box>
    <Box sx={{
      padding: '1.2rem 1.5rem',
    }}
    >
      <Typography
        variant="h6"
        mb="1rem"
        fontWeight="600"
      >
        Type
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel value="donation" control={<Radio onChange={(e) => changeTypeValue(e.currentTarget.value)} />} label="donation" />
        <FormControlLabel value="exchange" control={<Radio onChange={(e) => changeTypeValue(e.currentTarget.value)} />} label="exchange" />
      </RadioGroup>
    </Box>
  </Box>
);

export default ProductsFilter;
