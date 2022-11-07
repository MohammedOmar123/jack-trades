/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import './NotificationCard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Avatar from '@mui/material/Avatar';
import { FC, useState, useEffect } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import axios from 'axios';
import { INotificationProps } from '../../interfaces';
import NotificationPopUp from './NotificationPopUp';

const NotificationCard:FC<{ item: INotificationProps }> = ({ item }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(item);

  return (
    <div
      className="notifications-card"
      onMouseOver={() => {
        setIsShow(true);
      }}
      onFocus={() => {
        setIsShow(true);
      }}
      onMouseLeave={() => {
        setIsShow(false);
      }}
    >
      <div className="user-info-card">
        <div className="user-img">
          {
          item['sender.image'] ? (<Avatar alt="Remy Sharp" src={item['sender.image']} />)
            : (<Avatar> SD</Avatar>)
        }
        </div>

        <p className="name">
          {`${item['sender.first_name']} ${item['sender.last_name']}` }
        </p>
        <p
          className="status"
          style={
              item.status === 'success'
                ? { backgroundColor: 'green' }
                : item.status === 'fail'
                  ? { backgroundColor: 'red' }
                  : { backgroundColor: 'orange' }
            }
        >
          {item.status}

        </p>
      </div>
      {/* middle */}
      { isShow || (
      <div className="notification-info">
        <p className="request">{ item.receiver_approval ? 'approved your request' : 'requested your item'}</p>
      </div>
      )}
      {/* second section */}
      <div className="product-image-container">
        <p className="notification-date">
          {formatDistance(
            parseISO(item.createdAt),
            new Date(),
            { addSuffix: true },
          )}
        </p>
        <div className="notification-product-Image">
          <img src={item['product.gallery'][0]} alt={item['product.title']} />
        </div>
      </div>

      {/* icons */}
      { isShow && (
      <div className="icons">
        <div>
          <abbr title="Decline"><CloseOutlinedIcon /></abbr>
          {item['product.type'] === 'exchange'
            ? <abbr title="View"><VisibilityIcon /></abbr>
            : <abbr title="Accept"><CheckOutlinedIcon /></abbr>}
        </div>
      </div>
      )}
      <NotificationPopUp open={open} handleClose={handleClose} />
    </div>

  );
};

export default NotificationCard;
