/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { EventController } from '../controllers/EventController';
//@PATH /auth
//@AUTH required in UD
//@FUNCTIONS CRUD of all user data
class UserRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    // this.putRoutes();
    // this.deleteRoutes();
  }
  getRoutes() {
    // Getting data of all the events created by the specific user ordered by time from latest.
    this.router.get('/all/:club', EventController.getAllEvents);
    // Getting upcoming/on-going events all the events created by the specific user
    this.router.get('/current/:club', EventController.getEventsCurrent);
    // Getting previous events all the events created by the specific user
    this.router.get('/prev/:club', EventController.getEventsPrevious);
  }
  postRoutes() {
    // Posting a new event
    this.router.post('/login', EventController.postNewEvent);
  }
  //   putRoutes() {
  //     // Updating an existing event
  //     this.router.post('/update', EventController.updateEvents);
  //   }
  //   deleteRoutes() {
  //     // Deleting an existing event
  //     this.router.delete('/delete/:id', EventController.deleteEvents);
  //   }
}

export default new UserRouter().router;
