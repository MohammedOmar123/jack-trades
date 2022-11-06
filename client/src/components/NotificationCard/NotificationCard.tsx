/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import './NotificationCard.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Avatar from '@mui/material/Avatar';
import { FC, useState } from 'react';
import { formatDistance, parseISO } from 'date-fns';
import { INotificationProps } from '../../interfaces';

const NotificationCard:FC<{ item: INotificationProps }> = ({ item }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

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

        <div className="notification-info">
          <p className="name">
            {`${item['sender.first_name']} ${item['sender.last_name']}` }
          </p>
          <p className="request">{ item.receiver_approval ? 'approved your request' : 'requested your item'}</p>
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

      </div>
      {/* second section */}
      <div className="product-image-container">
        <img className="notification-product-Image" src={item['product.gallery'][0]} alt="" />
        { isShow
          ? (
            <div className="icons">
              <abbr title="Decline"><DisabledByDefaultIcon /></abbr>
              {item['product.type'] === 'exchange'
                ? <abbr title="View"><VisibilityIcon /></abbr>
                : <abbr title="Accept"><CheckBoxIcon /></abbr>}
            </div>
          ) : (
            <p className="notification-date">
              {formatDistance(
                parseISO(item.createdAt),
                new Date(),
                { addSuffix: true },
              )}
            </p>
          ) }
      </div>
    </div>

  );
};

export default NotificationCard;
