import { Server } from 'socket.io';

const ioHandler = (io:Server) => {
  let onlineUsers = [];
  // eslint-disable-next-line max-len
  const addNewUser = (userId:number, socketId:string) => !onlineUsers.some((user) => user.userId === userId)
    && onlineUsers.push({
      socketId, userId,
    });

  const removeUser = (socketId) => onlineUsers.filter((user) => socketId !== user.socketId);

  const getUser = (id:number) => onlineUsers.find((user) => user.userId === id);
  io.on('connection', (socket) => {
    // add new user
    socket.on('newUser', (userId:number) => {
      addNewUser(userId, socket.id);
    });

    socket.emit('welcome', 'hello user');

    socket.on('requests', ({ receiverId, senderName }) => {
      const result = getUser(receiverId);
      if (result) {
        const { socketId } = result;
        socket.to(socketId).emit('sendNotification', senderName);
        socket.to(socketId).emit('toast', senderName);
      }
    });
    socket.on('disconnect', () => {
      onlineUsers = removeUser(socket.id);
    });
  });
};
export default ioHandler;