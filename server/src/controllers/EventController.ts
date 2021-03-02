/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import { dbsConnection } from '../middlewares/postegre-init';
import Event from '../models/client/Event';
import moment from 'moment';
const table = 'gymkhana_event_data';
const event =
  'CREATE TABLE IF NOT EXISTS ' +
  table +
  ` (
  document_id serial PRIMARY KEY, 
  council VARCHAR(10),
  club VARCHAR(20),
  title VARCHAR(20),
  venue VARCHAR(20),
  desc_info VARCHAR(100),
  attachment VARCHAR(100),
  create_date TIMESTAMP,
  start_date TIMESTAMP,
  end_date TIMESTAMP
  );`;

export class EventController {
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const client = await dbsConnection();
      await client.query(event);
      const query = 'SELECT * FROM ' + table;
      const resp = await client.query(query);
      await client.end();
      console.log(resp);
      // const data = await Event.find({});
      res.status(200).json({
        data: resp,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getEventsCurrent(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const client = await dbsConnection();
      await client.query(event);
      const query =
        `SELECT * FROM ` +
        table +
        ` WHERE end_date > now() + interval '1 day';`;
      const resp = await client.query(query);
      await client.end();
      res.status(200).json({
        data: resp,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }

  static async getEventsPrevious(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const client = await dbsConnection();
      await client.query(event);
      const query =
        `SELECT * FROM ` +
        table +
        ` WHERE end_date < now() + interval '1 day';`;
      const resp = await client.query(query);
      await client.end();
      res.status(200).json({
        data: resp,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }

  static async postNewEvent(req: Request, res: Response, next: NextFunction) {
    try {
      // const event = req.body.data;
      const newEvent = req.body.data;
      const queryText =
        `INSERT INTO ` +
        table +
        `(
        council, club, title, venue, desc_info, attachment, create_date, start_date, end_date) VALUES(
          $1, $2,$3,$4,$5,$6,$7,$8,$9)`;
      const queryValues = [
        newEvent.council,
        newEvent.club,
        newEvent.title,
        newEvent.venue,
        newEvent.desc_info,
        newEvent.attachment,
        moment().format('YYYY-MM-DD HH:mm:ss'),
        moment().add(-10, 'days').format('YYYY-MM-DD HH:mm:ss'),
        moment().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss')
      ];
      const query = {
        text: queryText,
        values: queryValues
      };
      const client = await dbsConnection();
      await client.query(event);
      await client.query(query);
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const newEvent = req.body.data;
      const queryText =
        `UPDATE ` +
        table +
        ` council = $1, 
        club = $2 , 
        title = $3, 
        venue = $4, 
        desc_info = $5, 
        attachment = $6, 
        create_date = $7, 
        start_date = $8, 
        end_date = $9
        WHERE document_id = $10
        `;
      const queryValues = [
        newEvent.council,
        newEvent.club,
        newEvent.title,
        newEvent.venue,
        newEvent.desc_info,
        newEvent.attachment,
        moment().format('YYYY-MM-DD HH:mm:ss'),
        moment().add(-10, 'days').format('YYYY-MM-DD HH:mm:ss'),
        moment().add(-3, 'days').format('YYYY-MM-DD HH:mm:ss'),
        newEvent.document_id
      ];
      const query = {
        text: queryText,
        values: queryValues
      };
      const client = await dbsConnection();
      await client.query(event);
      await client.query(query);
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const queryText = `DELETE FROM ` + table + ` WHERE document_id = $1`;
      const queryParam = [req.params.id];
      const query = {
        text: queryText,
        values: queryParam
      };
      const client = await dbsConnection();
      await client.query(event);
      await client.query(query);
      await Event.findByIdAndDelete(req.body.id);
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
