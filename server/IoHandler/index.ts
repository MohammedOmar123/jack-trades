/* eslint-disable max-len */
let onlineUsers = [];

const addNewUser = (userId, socketId) => !onlineUsers.some((user) => user.userId === userId)
  && onlineUsers.push({ userId, socketId });

// eslint-disable-next-line no-return-assign
const removeUser = (socketId) => onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);

const getUser = (receiverId) => onlineUsers.find((user) => user.userId === receiverId);

const handleIoEvents = (io) => {
  io.on('connection', (socket) => {
    console.log('sarsar is amazing');
    // when user add something to his wishlist >> this is just a test
    socket.on('addToWishList', ({ senderId, receiverId }) => {
      const { socketId } = getUser(receiverId);
      socket.to(socketId).emit(
        'getNotification',
        `${getUser(senderId).userId} like your product`,
      );
    });

    // when user login
    socket.on('newUser', (userId) => {
      addNewUser(userId, socket.id);
    });

    // when user logout.
    socket.on('disconnect', () => {
      removeUser(socket.id);
    });
  });
};
export default handleIoEvents;
