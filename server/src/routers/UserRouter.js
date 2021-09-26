"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
//@PATH /auth
//@AUTH required in UD
//@FUNCTIONS CRUD of all user data
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.getRoutes();
        this.postRoutes();
        // this.putRoutes();
        // this.deleteRoutes();
    }
    getRoutes() {
        // Getting data of all the events created by the specific user ordered by time from latest.
        this.router.post('/all', UserController_1.UserController.getAllEvents);
        // Getting upcoming/on-going events all the events created by the specific user
        this.router.post('/current', UserController_1.UserController.getEventsCurrent);
        // Getting previous events all the events created by the specific user
        this.router.post('/prev/:club', UserController_1.UserController.getEventsPrevious);
    }
    postRoutes() {
        // Posting a new event
        this.router.post('/login', UserController_1.UserController.login);
    }
}
exports.default = new UserRouter().router;
