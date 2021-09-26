/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { TechEventController } from '../controllers/TechEventController';
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class TechEventRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    // Getting upcoming/on-going events
    this.router.get('/current', TechEventController.getEvent);
  }

  postRoutes() {
    // Posting a new event
    this.router.post('/new', TechEventController.postEvent);
  }
  putRoutes() {
    // Updating an existing event
    this.router.post('/update', TechEventController.editEvent);
  }
  deleteRoutes() {
    // Deleting an existing event
    this.router.post('/delete', TechEventController.deleteEvent);
  }
}

export default new TechEventRouter().router;
