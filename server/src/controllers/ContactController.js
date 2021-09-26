"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const ContactEmail_1 = require("../middlewares/ContactEmail");
class ContactController {
    static generalContact(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const contactDetails = ContactEmail_1.ContactEmail.getInstance();
                const senderMail = contactDetails.getContactEmail();
                yield senderMail.sendMail(mail, (error) => {
                    if (error) {
                        throw new Error(error);
                    }
                    else {
                        res.json({ success: true });
                    }
                    console.log(mail);
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ContactController = ContactController;
