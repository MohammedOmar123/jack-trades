import React, { createContext, useState } from 'react';
import { IImageContext, IProviderProps } from '../../interfaces';

export const ImageContext = createContext<IImageContext>({
  setMainImage: () => {},
  mainImage: '',
  gallery: [''],
});

export const ImageContextProvider: React.FC<IProviderProps> = ({
  children,
  gallery,
}: IProviderProps) => {
  const [mainImage, setMainImage] = useState(gallery[0]);

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ImageContext.Provider value={{ mainImage, setMainImage, gallery }}>
      {children}
    </ImageContext.Provider>
  );
};
