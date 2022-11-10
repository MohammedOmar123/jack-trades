/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FC, ChangeEvent, useState, FormEvent, useContext,
} from 'react';
import {
  TextField, IconButton, Box, Typography, Button,
} from '@mui/material';

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './AddProduct.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import TypeRadio from './TypeRadio';
import CategoryRadio from './CategoryRadio';
import { validateProduct } from '../../validation';
import { AuthContext } from '../Context/AuthContext';

const AddProduct:FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [gallery, setGallery] = useState<(string | File)[]>([]);
  const [type, setType] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [errMessage, setErrMessage] = useState<string>('');
  const { userId } = useContext(AuthContext);
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') setTitle(e.target.value);
    else setDescription(e.target.value);
  };

  const handleImage = async (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const data = new FormData();
        data.append('file', e.target.files[0]);
        data.append('upload_preset', 'mohammed');
        data.append('cloud_name', 'dginxclgp');
        const response = await axios
          .post('https://api.cloudinary.com/v1_1/dginxclgp/image/upload', data);

        setGallery((prev) => [...prev, response.data.url]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await validateProduct.validate({
        title, description, type, gallery, category_id: +category,
      });

      const response = await axios.post('/api/v1/products', data);
      await Swal.fire({
        title: response.data.message,
        confirmButtonColor: '#1b4b66',
      });
      navigate(`/profile/${userId}`);
    } catch (error) {
      if (error.name === 'ValidationError') {
        await Swal.fire({
          title: error.message,
          confirmButtonColor: '#1b4b66',
        });
      }
    }
  };

  return (
    <form
      className="newProduct"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Add new product:</legend>
        <TextField
          id="outlined-text"
          label="Title"
          name="title"
          className="info"
          type="text"
          onChange={handleChange}
          value={title}
        />

        <TextField
          id="outlined-textarea"
          label="Description"
          name="description"
          placeholder="description"
          minRows={3}
          maxRows={6}
          className="info"
          onChange={handleChange}
          value={description}
          multiline
        />

        <TypeRadio setType={setType} />
        <CategoryRadio setCategory={setCategory} />

        <Typography variant="h5">Choose Images</Typography>
        <Box className="images">
          <Box
            className="upload-img"
            sx={{
              backgroundImage: `url(${gallery[0]})`,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              <PhotoCamera />
            </IconButton>
          </Box>

          <Box
            className="upload-img"
            sx={{
              backgroundImage: `url(${gallery[1]})`,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              <PhotoCamera />
            </IconButton>
          </Box>

          <Box
            className="upload-img"
            sx={{
              backgroundImage: `url(${gallery[2]})`,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImage}
              />
              <PhotoCamera />
            </IconButton>
          </Box>
        </Box>
        <Button variant="contained" type="submit">Submit</Button>
      </fieldset>
    </form>
  );
};

export default AddProduct;
