import React, { createContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { io } from 'socket.io-client';
import { IImageContext, IProviderProps } from '../../interfaces';

export const ImageContext = createContext<IImageContext>({
  setMainImage: () => {},
  mainImage: '',
  gallery: [''],
  setProductArray: () => {},
  productArray: [1],
  setProductId: () => {},
  handleRequest: () => {},
  setOpen: () => {},
  open: false,
});

export const ImageContextProvider: React.FC<IProviderProps> = ({
  children,
  gallery,
}: IProviderProps) => {
  const [mainImage, setMainImage] = useState(gallery[0]);
  const [productArray, setProductArray] = useState<number[]>([]);
  const [productId, setProductId] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const socket = io('http://localhost:8000');
  const handleRequest = async (receiverId:number, senderName:string) => {
    try {
      const alert = await Swal.fire({
        title: 'Confirm request?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#1b4b66',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      });
      if (alert.isConfirmed) {
        const response = await axios.post('/api/v1/requests', {
          productId,
          products: productArray || null,
        });
        const res = await Swal.fire(response.data.message);
        if (res.isConfirmed) {
          setProductArray([]);
          setOpen(false);
          socket.emit('requests', {
            receiverId, senderName, isSend: true, type: 'request',
          });
        }
      }
    } catch (error) {
      await Swal.fire(error.response.data.message);
    }
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ImageContext.Provider value={{
      mainImage,
      setMainImage,
      gallery,
      setProductArray,
      productArray,
      setProductId,
      handleRequest,
      open,
      setOpen,
    }}
    >
      {children}
    </ImageContext.Provider>
  );
};
