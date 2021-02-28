/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { CouncilMemberController } from '../controllers/CouncilMemberController';
import { AuthSetup } from '../middlewares/authentication-setup';

//@PATH /council
//@AUTH required
//@FUNCTIONS CRUD of council post holders

class CouncilMemberRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    this.router.get(
      '/council/all-members',
      AuthSetup.isAuthenticated,
      CouncilMemberController.getCouncilMembersAll
    );
    this.router.get(
      '/council/current/:query',
      AuthSetup.isAuthenticated,
      CouncilMemberController.getCouncilMembersAll
    );
    this.router.get(
      '/council/:year/:query',
      AuthSetup.isAuthenticated,
      CouncilMemberController.getCouncilMembersAll
    );
  }

  postRoutes() {
    this.router.post(
      '/post/post',
      AuthSetup.isAuthenticated,
      AnalystPostController.savePost
    );
    this.router.post(
      '/post/query',
      AuthSetup.isAuthenticated,
      AnalystPostController.getPostByQuery
    );
  }
  deleteRoutes() {
    this.router.delete('/post/delete', AnalystPostController.deletePost);
  }
}

export default new CouncilMemberRouter().router;
