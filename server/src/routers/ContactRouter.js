"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = require("express");
const ContactController_1 = require("../controllers/ContactController");
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class ContactRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        // to be updated in future if needed
    }
    postRoutes() {
        // To submit mail via contact form.
        this.router.post('/gymkhana', ContactController_1.ContactController.generalContact);
    }
    putRoutes() {
        // to be updated in future if needed
    }
    deleteRoutes() {
        // to be updated in future if needed
    }
}
exports.default = new ContactRouter().router;
