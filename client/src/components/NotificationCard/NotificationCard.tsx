/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import './NotificationCard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import Avatar from '@mui/material/Avatar';
import {
  FC, useState, useContext, useEffect,
} from 'react';
import { formatDistance, parseISO } from 'date-fns';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { INotificationProps } from '../../interfaces';
import NotificationPopUp from './NotificationPopUp';
import { AuthContext } from '../Context/AuthContext';

const NotificationCard:FC<{ item: INotificationProps
}> = ({
  item,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const { userId, socket, fullName } = useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleApproval = async () => {
    try {
      const response = await axios
        .put(`/api/v1/requests/${item.id}`, {
          receiverApproval: true,
          productId: null,
        });
      const alert = await Swal.fire({
        title: response.data,
        confirmButtonColor: '#1b4b66',
      });
      setStatus('success');
      socket.emit('requests', { receiverId: item.sender_id, senderName: fullName, type: 'approve' });
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  const handleDecline = async () => {
    try {
      const response = await axios
        .put(`/api/v1/requests/${item.id}`, {
          receiverApproval: false,
          productId: null,
        });
      socket.emit('requests', { receiverId: item.sender_id, senderName: fullName, type: 'decline' });

      const alert = await Swal.fire({
        title: response.data,
        confirmButtonColor: '#1b4b66',
      });
      setStatus('fail');
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    setStatus(item.status);
  }, [item]);

  useEffect(() => {
    if (status === 'success') setMessage('Approved your request');
    else if (status === 'fail') setMessage('Declined your request');
  }, [status]);

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
          item.image ? (<Avatar alt="Remy Sharp" src={item.image} />)
            : (<Avatar>{`${item.first_name[0]} ${item.last_name[0]}` }</Avatar>)
        }
        </div>
        <Link to={`/profile/${item.receiver_id === userId ? item.sender_id : item.receiver_id}`}>
          <p className="name">
            {`${item.first_name} ${item.last_name}` }
          </p>
        </Link>
        <p
          className="status"
          style={
              status === 'success'
                ? { backgroundColor: 'green' }
                : status === 'fail'
                  ? { backgroundColor: 'red' }
                  : { backgroundColor: 'orange' }
            }
        >
          {status}

        </p>
      </div>
      {/* middle */}
      { (isShow && status === 'pending') || (
      <div className="notification-info">
        <p className="request">{ item.receiver_id !== userId ? message : 'requested your item'}</p>
      </div>
      )}
      {/* second section */}
      <div className="product-image-container">
        <p className="notification-date">
          {formatDistance(
            parseISO(item.date),
            new Date(),
            { addSuffix: true },
          )}
        </p>
        <div className="notification-product-Image">
          {item.gallery && <img src={item.gallery[0]} alt={item.title} />}
        </div>
      </div>

      {/* icons */}
      { isShow && status === 'pending' && (
      <div className="icons">
        <div>
          <abbr
            title="Decline"
            role="button"
            onClick={handleDecline}
          >
            <CloseOutlinedIcon />

          </abbr>
          {item.type === 'exchange'
            ? (
              <abbr
                title="View"
                role="button"
                onClick={handleOpen}
              >
                <VisibilityIcon />
              </abbr>
            )
            : (
              <abbr
                title="Accept"
                role="button"
                onClick={handleApproval}
              >
                <CheckOutlinedIcon />
              </abbr>
            )}
        </div>
      </div>
      )}
      <NotificationPopUp senderId={item.sender_id} open={open} handleClose={handleClose} id={item.id} setStatus={setStatus} />
    </div>
  );
};

export default NotificationCard;
