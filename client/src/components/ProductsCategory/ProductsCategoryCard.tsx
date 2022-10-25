/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import { FavoriteBorder } from '@mui/icons-material';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import React from 'react';

const ProductsCategoryCard = () => (
  <ImageListItem sx={{
    width: '16rem', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1rem',
  }}
  >
    <img
      height="100%"
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format"
      alt="Breakfast"
      loading="lazy"
    />
    <ImageListItemBar
      sx={{
        padding: '5px 0 0 1.5rem', backgroundColor: '#333', color: '#FFF',
      }}
      title="Breakfast"
      position="below"
    />
    <ImageListItemBar
      sx={{
        backgroundColor: 'transparent', color: '#FFF',
      }}
      position="top"
      actionIcon={(
        <IconButton
          sx={{ color: 'white' }}
          aria-label="star sadfasd"
        >
          <FavoriteBorder />
        </IconButton>
        )}
    />
  </ImageListItem>
);

export default ProductsCategoryCard;
