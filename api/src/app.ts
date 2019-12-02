import express from './node_modules/express'
import cors from './node_modules/cors'
import mongoose from 'mongoose'

import routes from './routes'
import bodyParser = require('./node_modules/body-parser');

import "./node_modules/reflect-metadata";

import {createConnection} from "./node_modules/typeorm";
import * as appConfig from "./config/app-config";

class App {
    public express: express.Application

    public constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
      this.database()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(bodyParser.json())
    }

    private database (): void {
      mongoose.connect('mongodb://localhost:27017/grana-preta', {
        useNewUrlParser: true
			});

			createConnection(appConfig.dbOptions).then(async () => {
				console.log("Connected to DB");
			}).catch(error => console.log("TypeORM connection error: ", error));
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
