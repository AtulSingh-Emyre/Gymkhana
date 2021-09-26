/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import TechEvent from '../models/TechCouncilEvents';

export class TechEventController {
  static async postEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const post = req.body;
      const newEvent = await new TechEvent({
        ...post,
        created_at: new Date(),
        updated_at: new Date()
      });
      await newEvent.save();
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
  static async getEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const newEvent = await TechEvent.find({})
        .limit(10)
        .sort({ created_at: -1 });
      res.json({ success: true, data: newEvent });
    } catch (error) {
      next(error);
    }
  }
  static async editEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const post = req.body;
      await TechEvent.findByIdAndUpdate(req.body.id, post);
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
  static async deleteEvent(req: Request, res: Response, next: NextFunction) {
    try {
      await TechEvent.findByIdAndDelete(req.body.id);
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}
