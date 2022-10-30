/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
import './NotificationCard.css';
import DoneIcon from '@mui/icons-material/Done';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const NotificationCard = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [styles, setStyles] = useState<object>();
  return (
    <div
      className="notifications-card"
      style={styles}
      onMouseOver={() => {
        setIsShow(true);
        setStyles({
          background: 'rgba(216, 208, 208, 0.711)',

        });
      }}
      onFocus={() => {
        setIsShow(true);
      }}
      onMouseLeave={() => {
        setIsShow(false);
        setStyles({
          background: '',

        });
      }}
    >
      <div className="user-info-card">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <div className="notification-info">
          <p className="name">Aryan</p>
          <p className="request">Request Your Item</p>
        </div>
      </div>
      <div className="product-image-container">
        <img className="notification-product-Image" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        { isShow
          ? (
            <div className="icons">
              <div>
                <abbr title="Accept"><DoneIcon /></abbr>
              </div>
              <div>
                <abbr title="Decline"><CloseIcon /></abbr>

              </div>
              <div>
                <abbr title="View">
                  <RemoveRedEyeOutlinedIcon />
                </abbr>

              </div>

            </div>
          ) : <p className="notification-date">10 mins ago</p> }
      </div>
    </div>

  );
};

export default NotificationCard;
