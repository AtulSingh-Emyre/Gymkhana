/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { ContactController } from '../controllers/ContactController';
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /events
//@AUTH required in CUD
//@FUNCTIONS CRUD of all events taking place in the institute
class ContactRouter {
  public router: Router;
  constructor() {
    this.router = Router();
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
    this.router.post('/gymkhana', ContactController.generalContact);
  }
  putRoutes() {
    // to be updated in future if needed
  }
  deleteRoutes() {
    // to be updated in future if needed
  }
}
export default new ContactRouter().router;
