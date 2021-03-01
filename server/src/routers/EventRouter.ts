/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { EventController } from '../controllers/EventController';
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class EventRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    // Getting data of all the events ordered by time from latest.
    this.router.get('/all', EventController.getAllEvents);
    // Getting events conducted by specific council/club in a specific year
    this.router.get('/:year/:query', EventController.getEventsQueried);
  }

  postRoutes() {
    // Posting a new event
    this.router.post('/new', EventController.postNewEvent);
  }
  putRoutes() {
    // Updating an existing event
    this.router.put('/update', EventController.updateEvents);
  }
  deleteRoutes() {
    // Deleting an existing event
    this.router.delete('/delete', EventController.deleteEvents);
  }
}

export default new EventRouter().router;
