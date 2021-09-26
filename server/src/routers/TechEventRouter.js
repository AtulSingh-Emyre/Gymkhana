"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = require("express");
const TechEventController_1 = require("../controllers/TechEventController");
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class TechEventRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        // Getting upcoming/on-going events
        this.router.get('/current', TechEventController_1.TechEventController.getEvent);
    }
    postRoutes() {
        // Posting a new event
        this.router.post('/new', TechEventController_1.TechEventController.postEvent);
    }
    putRoutes() {
        // Updating an existing event
        this.router.post('/update', TechEventController_1.TechEventController.editEvent);
    }
    deleteRoutes() {
        // Deleting an existing event
        this.router.post('/delete', TechEventController_1.TechEventController.deleteEvent);
    }
}
exports.default = new TechEventRouter().router;
