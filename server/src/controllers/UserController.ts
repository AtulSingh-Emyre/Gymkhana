/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import Event from '../models/client/Event';
import moment from 'moment';

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
      const valid = [
        'gstech',
        'gssports',
        'gscult',
        'gsacad',
        'gsha',
        'messcommittee',
        '190020020'
      ];
      if (valid.includes(iden)) {
        return res.status(200).json({
          success: true
        });
      } else
        return res.status(200).json({
          success: false,
          mssg: 'unauthorized access'
        });
    } catch (error) {
      next(error);
    }
  }
}
