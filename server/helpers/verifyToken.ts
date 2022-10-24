import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

const verifyToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, secretKey, (err, result) => {
    if (err) return reject(err);
    return resolve(result);
  });
});

export default verifyToken;
