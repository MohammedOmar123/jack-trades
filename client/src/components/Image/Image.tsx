import { FC, useContext } from 'react';
import { IImageProps } from '../../interfaces';
import './Image.css';
import { ImageContext } from '../Context/ImageContext';

const Image: FC <IImageProps> = ({
  attributes: {
    src, alt, className,
  },
}) => {
  const con = useContext(ImageContext);
  return (
    <img
      onMouseOver={() => {
        con.setMainImage(src);
      }}
      onFocus={() => {
        con.setMainImage(src);
      }}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
