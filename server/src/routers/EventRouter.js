"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = require("express");
const EventController_1 = require("../controllers/EventController");
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class EventRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        this.putRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        // Getting data of all the events ordered by time from latest.
        this.router.get('/all/:data', EventController_1.EventController.getAllEvents);
        // Getting upcoming/on-going events
        this.router.get('/current', EventController_1.EventController.getEventsCurrent);
        // Getting previous events
        this.router.get('/prev', EventController_1.EventController.getEventsPrevious);
    }
    postRoutes() {
        // Posting a new event
        this.router.post('/new', EventController_1.EventController.postNewEvent);
    }
    putRoutes() {
        // Updating an existing event
        this.router.post('/update', EventController_1.EventController.updateEvents);
    }
    deleteRoutes() {
        // Deleting an existing event
        this.router.delete('/delete/:id', EventController_1.EventController.deleteEvents);
    }
}
exports.default = new EventRouter().router;
