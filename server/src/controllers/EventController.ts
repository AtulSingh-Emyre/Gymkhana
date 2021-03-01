/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import Event from '../models/client/Event';

export class EventController {
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await Event.find({});
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async getEventsQueried(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const year = parseInt(req.params.year);
      const query: any = req.params.query;
      const data = await Event.find({
        start: {
          $gte: new Date(year, 1, 1)
        },
        end: {
          $lt: new Date(year + 1, 1, 1)
        },
        ...query
      });
      res.status(200).json({
        data,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async postNewEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const event = req.body.data;
      const newEvent = new Event(event);
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
      await Event.findByIdAndUpdate(req.body.id, {
        ...req.body.update
      });
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async deleteEvents(req: Request, res: Response, next: NextFunction) {
    try {
      await Event.findByIdAndDelete(req.body.id);
      res.status(200).json({
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
}
