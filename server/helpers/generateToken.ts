import jwt from 'jsonwebtoken';

const generateToken = (id, email) => new Promise((resolve, rejected) => {
  jwt.sign({ id, email }, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      rejected(error);
    } else {
      resolve(token);
    }
  });
});

export default generateToken;
