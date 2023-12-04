import dotevt from 'dotenv';
import Server from './models/server';

dotevt.config();

const server = new Server();

server.listen();