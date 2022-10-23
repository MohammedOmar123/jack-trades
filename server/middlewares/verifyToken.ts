import jwt from 'jsonwebtoken';

const verifyToken = (token, secretKey) => new Promise((resolve, reject) => {
  jwt.verify(token, secretKey, (error, decoded) => {
    console.log(token);

    console.log(decoded);

    if (error) reject(error);
    else resolve(decoded);
  });
});

export default verifyToken;
