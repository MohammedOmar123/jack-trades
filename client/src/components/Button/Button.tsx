import { FC } from 'react';
import {
  FavoriteBorder,
  ArrowForward,
  LocalMall,
  ChatBubbleOutlineRounded,
  Favorite,
} from '@mui/icons-material';
import { ButtonPropsTypes } from '../../interfaces/index';
import './Button.css';

const ButtonComponent: FC<ButtonPropsTypes> = ({
  style: {
    text, icon, classes, handleClick,
  },
}) => {
  // All Icon
  const iconsList = {
    FavoriteBorder: <FavoriteBorder />,
    ArrowForward: <ArrowForward />,
    ChatBubbleOutlineRounded: <ChatBubbleOutlineRounded />,
    LocalMall: <LocalMall />,
    Favorite: <Favorite />,
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        if (handleClick) handleClick();
      }}
    >
      {icon ? iconsList[icon as keyof typeof iconsList] : ''}
      <p>
        {text}
      </p>
    </button>
  );
};

export default ButtonComponent;
