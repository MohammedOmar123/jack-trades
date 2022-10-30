import { HorizontalRule } from '@mui/icons-material';
import { Typography } from '@mui/material';
import NotificationCard from '../NotificationCard/NotificationCard';

import './notificationContainer.css';

const NotificationContainer = () => (
  <div>
    <div className="notifications-container">
      <div className="notification-header">
        <div className="notification">
          <Typography variant="h4">
            Notifications
          </Typography>
          {/* <NotificationAddOutlined className="notification-mark" /> */}
        </div>
        <div className="line">
          <HorizontalRule
            color="info"
            fontSize="large"
          />
        </div>
      </div>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />

    </div>
  </div>
);

export default NotificationContainer;
