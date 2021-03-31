/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import Event from '../models/client/Event';
import moment from 'moment';
import User from '../models/client/UserAuth';
export class UserController {
  static async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const resp = await Event.find({
        organiser: { $all: req.body.clubs }
      }).sort({ start: -1 });
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
        start: { $gt: moment().subtract({ day: 1 }).toDate() },
        organiser: { $all: req.body.clubs }
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
        start: { $lt: moment().toDate() },
        organiser: { $all: req.body.clubs }
      }).sort({ start: -1 });
      res.status(200).json({
        data: resp,
        success: true
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const iden = req.body.iden;
      const userData = await User.find({ identifier: iden });
      if (!userData) {
        res.json({
          success: false,
          mssg: 'Unauthorized login'
        });
      }
      res.status(200).json({
        success: true,
        data: userData
      });
    } catch (error) {
      next(error);
    }
  }
}
