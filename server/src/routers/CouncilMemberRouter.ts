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
    this.router.get(
      '/all-members',
      CouncilMemberController.getCouncilMembersAll
    );
    this.router.get(
      '/current/:query'
      // CouncilMemberController.getCouncilMembersCurrent
    );
    this.router.get(
      '/council/:year/:query'
      // CouncilMemberController.getCouncilMemberPrev
    );
  }

  // postRoutes() {}
  // deleteRoutes() {}
}

export default new CouncilMemberRouter().router;
