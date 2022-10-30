/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import {
  TextField,
  IconButton,
  Box,
  Typography,
  Button,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './AddProduct.css';
import TypeRadio from './TypeRadio';
import CategoryRadio from './CategoryRadio';

const AddProduct:FC = () => (
  <form className="newProduct">
    <fieldset>
      <legend>Add new product:</legend>
      <TextField
        id="outlined-text"
        label="Title"
        className="info"
        type="text"
      />

      <TextField
        id="outlined-textarea"
        label="Description"
        placeholder="description"
        minRows={3}
        maxRows={6}
        className="info"
        multiline
      />

      <TypeRadio />
      <CategoryRadio />

      <Typography variant="h5">Choose Images</Typography>
      <Box className="images">
        <Box className="upload-img">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Box>

        <Box className="upload-img">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Box>

        <Box className="upload-img">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Box>
      </Box>
      <Button variant="contained" type="submit">Submit</Button>
    </fieldset>
  </form>
);

export default AddProduct;

// <Button
//   variant="contained"
//   component="label"
// >
//   Upload File
//   <input
//     type="file"
//     hidden
//   />
// </Button>
