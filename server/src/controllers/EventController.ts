/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import Event from '../models/client/Event';
import moment from 'moment';
export class EventController {
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.params.data;
      const skipAndSplit = data.split(' ');
      console.log(data);
      const resp = await Event.find({})
        .sort({ start: -1 })
        .skip(parseInt(skipAndSplit[0]))
        .limit(parseInt(skipAndSplit[1]));
      console.log(resp);
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
      const resp = await Event.find({
        start: { $gt: moment().subtract({ day: 1 }).toDate() }
      }).sort({ start: -1 });
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
      const resp = await Event.find({
        start: { $lt: moment().toDate() }
      }).sort({ start: -1 });
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
      const event = req.body.postData;
      const newEvent = await new Event({
        ...event,
        created_at: new Date(),
        updated_at: new Date()
      });
      await newEvent.save();
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async updateEvents(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);
      const updatedEvent = req.body.data;
      const eventId = req.body.id;
      console.log(updatedEvent, eventId);
      const result = await Event.findOneAndUpdate(
        { _id: eventId },
        {
          ...updatedEvent,
          updated_at: new Date()
        },
        { new: true }
      );
      res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const queryParam = req.params.id;
      await Event.findByIdAndDelete(queryParam);
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
