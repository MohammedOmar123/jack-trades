/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FC, useState, useContext, useEffect,
} from 'react';
import {
  Button, Modal, ImageList, ListSubheader, ImageListItem, Typography,
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { IProductPopup, UserProduct } from '../../interfaces';
// import './Popup.css';

const NotificationPopUp:FC<IProductPopup> = ({ open, handleClose }) => {
  const [products, setProducts] = useState< UserProduct[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const fetchOfferedProducts = async () => {
    // try {
    //   const response = await axios
    // .get(`/api/v1/requests/products/${item.id}`);
    //   console.log(response.data);
    // } catch (error) {
    //   console.log(error, 'error in fetching offered data');
    // }
  };

  useEffect(() => {
    fetchOfferedProducts();
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="popupModal"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {products.length ? (
        <ImageList
          sx={{
            width: 700, height: 550, backgroundColor: '#fff', padding: '1rem',
          }}
          cols={3}
          gap={13}
        >
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div">
              Choose products for exchange
            </ListSubheader>
          </ImageListItem>
          {products.map((item) => (
            <h1>Hello</h1>
            // <PopupCard item={item} key={item.id} />
          ))}
          <ImageListItem cols={3}>
            {showMessage
            && <Typography variant="h5">Choose at least one item</Typography>}
            <Button
              variant="contained"
              onClick={() => console.log('clickeddd')}
            >
              confirm

            </Button>
          </ImageListItem>

        </ImageList>

      ) : (<h1>Loading ...</h1>)}
    </Modal>
  );
};

export default NotificationPopUp;
