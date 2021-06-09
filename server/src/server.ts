/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import express from 'express';
import { Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
//server file imports

import { getEnvironmentVariables } from './environments/env';
import EventRouter from './routers/EventRouter';
import UserRouter from './routers/UserRouter';
import ContactRouter from './routers/ContactRouter';
import { ContactEmail } from './middlewares/ContactEmail';
import TechEventRouter from './routers/TechEventRouter';

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfigurations();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigurations() {
    this.connectMongoDb();
    this.configureBodyParser();
    this.configureNodemailer();
    this.app.use(cors());
    console.log('Configurations have been successfully setup');
  }

  configureBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    console.log('body-parser setup');
  }

  async connectMongoDb() {
    try {
      const databaseUrl = getEnvironmentVariables().db_url;
      mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
      mongoose.connection.on('open', () => {
        console.log('connection successfully made with database');
      });
    } catch (error) {
      console.log(error);
      this.connectMongoDb();
    }
  }
  configureNodemailer() {
    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contact.gymkhana.iitdh@gmail.com',
        pass: 'contact2$2$'
      }
    });
    contactEmail.verify((error: any) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Ready to Send');
      }
    });
    const nodemailerData = ContactEmail.getInstance();
    nodemailerData.setContactEmail(contactEmail);
  }
  setRoutes() {
    this.app.use('/events', EventRouter);
    this.app.use('/user', UserRouter);
    this.app.use('/contact', ContactRouter);
    this.app.use('/tech', TechEventRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: 'Not Found',
        status_code: 404
      });
    });
  }

  handleErrors() {
    this.app.use((error: any, req: any, res: Response) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || 'Something Went Wrong. Please Try Again',
        status_code: errorStatus,
        success: false
      });
    });
  }
}
