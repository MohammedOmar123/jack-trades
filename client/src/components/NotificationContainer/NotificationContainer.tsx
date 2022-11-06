import { HorizontalRule } from '@mui/icons-material';
import { Typography } from '@mui/material';
import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import NotificationCard from '../NotificationCard/NotificationCard';
import { INotificationProps } from '../../interfaces';
import './notificationContainer.css';

const NotificationContainer:FC = () => {
  const [notifications, setNotifications] = useState<INotificationProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/v1/notifications');
      setNotifications(response.data.message);
    } catch (error) {
      console.log(error, 'error in requesting the notifications');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {notifications.map((e) => <NotificationCard item={e} key={e.id} />)}
    </div>
  );
};

export default NotificationContainer;
