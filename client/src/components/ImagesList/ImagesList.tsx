import { useContext } from 'react';
import { Box } from '@mui/material';
import Image from '../Image/Image';
import './ImageList.css';
import { ImageContext } from '../Context/ImageContext';

const ImagesList = () => {
  const con = useContext(ImageContext);
  return (
    <Box className="ImagesContainer">
      {
    con.gallery.map((image) => (
      <Image
        key={Math.random() + Date.now()}
        attributes={{
          src: image,
          alt: 'Product Image',
          className: 'images-gallery',
        }}
      />
    ))
}
    </Box>
  );
};
export default ImagesList;
