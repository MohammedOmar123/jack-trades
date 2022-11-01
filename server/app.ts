import { join } from 'path';
import http from 'http';

import express, { Application } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';

import handleIoEvents from './IoHandler';
import router from './routes';
import { ErrorHandler } from './helpers';

const { NODE_ENV, PORT } = process.env;
const app: Application = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

handleIoEvents(io);

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);
app.set('port', PORT || 8000);

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build'));
  });
}

app.use(ErrorHandler);
export { server, app };
