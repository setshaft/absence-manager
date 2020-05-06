import express from 'express';
import cors from 'cors';
import router from './router';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(router);
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }
}

export default new App().server;
