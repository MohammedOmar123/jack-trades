/* eslint-disable max-len */
import {
  Box, Checkbox, FormControlLabel, FormGroup, Typography,
} from '@mui/material';
import { FC } from 'react';
import { ICategories } from '../../interfaces';

const ProductsFilter: FC<{ categories: ICategories[] }> = ({ categories }) => (
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
      {categories.map((category) => (
        <FormGroup
          key={category.id}
          sx={{
            marginLeft: '1rem',
          }}
        >
          <FormControlLabel control={<Checkbox />} label={category.name} />
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
      <FormGroup
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Newest" />
      </FormGroup>
      <FormGroup
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Oldest" />
      </FormGroup>
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
      <FormGroup
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Donation" />
      </FormGroup>
      <FormGroup
        sx={{
          marginLeft: '1rem',
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Exchange" />
      </FormGroup>
    </Box>
  </Box>
);

export default ProductsFilter;
