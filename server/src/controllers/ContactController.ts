/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
import Event from '../models/client/Event';
import moment from 'moment';
import { ContactEmail } from '../middlewares/ContactEmail';

export class ContactController {
  static async generalContact(req: Request, res: Response, next: NextFunction) {
    try {
      const { council, name, email, phone, mssg } = req.body.contactQuery;
      const mail = {
        from: name,
        to: council,
        subject: 'Gymkhana Contact Mail',
        html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Phone: ${phone}</p>
                   <p>Message: ${mssg}</p>`
      };
      const contactDetails = ContactEmail.getInstance();
      type AnyType = any;

      contactDetails.getContactEmail().sendMail(mail, (error: AnyType) => {
        if (error) {
          throw new Error(error);
        } else {
          res.json({ success: true });
        }
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
        'messcommittee'
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
