import { FC } from 'react';
import { ImagePropsTypes } from '../../interfaces';

// eslint-disable-next-line max-len
const Image: FC <ImagePropsTypes> = ({ attributes: { src, alt, className } }) => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
