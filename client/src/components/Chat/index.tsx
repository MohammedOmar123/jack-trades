/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import {
  FC, useEffect, useRef, useState, useContext,
} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { IChatData, IAllMessages } from '../../interfaces';
import './style.css';

// handle message
const ChatMessage = ({
  senderImage,
  receiverImage,
  userId,
  senderId,
  senderName,
  receiverName,
  message,
}: IChatData) => (
  <div className={userId === senderId ? 'chatMessage' : 'chatMessage active'}>
    <img
      src={userId === senderId ? senderImage : receiverImage}
      alt={userId === senderId ? senderName : receiverName}
    />
    <p className="message">{message}</p>
  </div>
);

// start FC
const ChatBox: FC<{
  isOpen: boolean,
  handleIsOpen: (chatOpen: boolean) => void,
  userId: string | undefined,
  userImage: string,
  userName: string,
}> = ({
  isOpen,
  handleIsOpen,
  userId,
  userImage,
  userName,
}) => {
  const bottomRef = useRef<HTMLInputElement | null >(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>();
  const [allMessages, setAllMessages] = useState<[IAllMessages] | null>(null);
  const {
    userId: authUserId, image, fullName, socket,
  } = useContext(AuthContext);

  useEffect(() => {
    // socket
    try {
      socket.on('sendMessage', (data) => {
        setAllMessages((prev: any): any => [...prev, {
          message: data.message,
          'receiver.first_name': userName.split(' ')[0],
          'receiver.image': userImage,
          'receiver.id': userId,
          'sender.first_name': fullName.split(' ')[0],
          'sender.image': image,
          sender_id: data.senderId,
        }]);
      });
    } catch (err) {
      setError('something went wrong, please try again later');
    }
  }, [socket]);

  const getAllMessages = async () => {
    try {
      const response = await axios.get(`/api/v1/chat/${userId}`);
      setAllMessages(response.data);
    } catch (err) {
      setError('something went wrong, please try again later');
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  useEffect(() => {
    bottomRef.current?.addEventListener('DOMNodeInserted', (event: any) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    });
  }, [allMessages]);

  const handleSubmit = async () => {
    try {
      if (!inputValue) throw new Error('input is required');
      await axios.post(`/api/v1/chat/${userId}/addMessage`, { message: inputValue });
      socket.emit('sendTextMessage', {
        senderId: authUserId,
        receiverId: userId,
        message: inputValue,
      });
      setAllMessages((prev: any): any => [...prev, {
        message: inputValue,
        'receiver.first_name': userName.split(' ')[0],
        'receiver.image': userImage,
        'receiver.id': userId,
        'sender.first_name': fullName.split(' ')[0],
        'sender.image': image,
        sender_id: authUserId,
      }]);
      setInputValue('');
    } catch (err) {
      setError('something went wrong, please try again later');
    }
  };
  if (error) return <div>{error}</div>;
  return isOpen ? (

    <section id="chat">
      <div className="header">
        <div className="user-info-chat">
          <img
            src={userImage}
            alt={userName}
          />
          <h3>{userName}</h3>
        </div>
        <CloseIcon onClick={() => handleIsOpen(false)} />
      </div>
      <div className="chatBox" ref={bottomRef}>
        {allMessages !== null ? allMessages.map((e, i) => (
          <ChatMessage
            senderImage={e['sender.image']}
            receiverImage={userImage}
            userId={authUserId}
            senderId={e.sender_id}
            senderName={e['sender.first_name']}
            receiverName={userName}
            message={e.message}
            key={`${i + 1}chat`}
          />
        )) : ''}

      </div>
      <form
        className="chat-input"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input type="text" placeholder="Aa" value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
        <button
          type="submit"
        >
          <SendOutlinedIcon />
        </button>
      </form>
    </section>
  ) : <div />;
};

export default ChatBox;
