/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { CouncilMemberController } from '../controllers/CouncilMemberController';
// import { AuthSetup } from '../middlewares/authentication-setup';

//@PATH /council
//@AUTH not required
//@FUNCTIONS CRUD of council post holders

class CouncilMemberRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    // this.postRoutes();
    // this.deleteRoutes();
  }
  getRoutes() {
    // Getting data of the current list of council members
    this.router.get(
      '/current/all-members',
      CouncilMemberController.getCouncilMembersAllCurrent
    );
    // Getting a specific council member from current year
    this.router.get(
      '/current/:query',
      CouncilMemberController.getCouncilMembersCurrentQueried
    );
    // Getting a specific council member from previous year
    this.router.get(
      '/prev/:year/:query',
      CouncilMemberController.getCouncilMemberPrevQueried
    );
  }

  // postRoutes() {}
  // deleteRoutes() {}
}

export default new CouncilMemberRouter().router;
