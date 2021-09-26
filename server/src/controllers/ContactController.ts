/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
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
      const senderMail = contactDetails.getContactEmail();
      await senderMail.sendMail(mail, (error: AnyType) => {
        if (error) {
          throw new Error(error);
        } else {
          res.json({ success: true });
        }
        console.log(mail);
      });
    } catch (error) {
      next(error);
    }
  }
}
