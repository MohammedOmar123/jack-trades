import { HorizontalRule } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';
import {
  FC, useState, useEffect, useContext,
} from 'react';
import Swal from 'sweetalert2';
import NotificationCard from '../NotificationCard/NotificationCard';
import { AuthContext } from '../Context/AuthContext';
import { INotificationProps } from '../../interfaces';
import './notificationContainer.css';

const NotificationContainer:FC = () => {
  const [notifications, setNotifications] = useState<INotificationProps[]>([]);
  const [isSend, setIsSend] = useState<boolean>(false);
  const { socket } = useContext(AuthContext);
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/v1/notifications');
      setNotifications(response.data);
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
    socket.on('sendNotification', (value:boolean) => {
      setIsSend(value);
    });
  }, [socket, isSend]);

  if (!notifications) return <h1>No data</h1>;
  return (
    <div className="notifications-container">
      <div className="notification-header">
        <div className="notification">
          <Typography variant="h4">
            Notifications
          </Typography>
        </div>
        <div className="line">
          <HorizontalRule
            color="info"
            fontSize="large"
          />
        </div>
      </div>
      {notifications.length ? (notifications.map((e) => (
        <NotificationCard
          item={e}
          key={e.id}
          fetchData={fetchData}
        />
      ))) : (
        <h1>No notifications</h1>
      )}
    </div>
  );
};

export default NotificationContainer;
