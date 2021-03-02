/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'express';
import { InventoryController } from '../controllers/InventoryController';
// import { AuthSetup } from '../middlewares/authentication-setup';
//@PATH /inventory
//@AUTH required in CUD
//@FUNCTIONS CRUD of all Inventory owned by the Gymkhana
class InventoryRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    // Getting data of all the items in Inventory ordered by time from latest.
    this.router.get('/all', InventoryController.getAllInventory);
    // Getting Inventory owned by specific council/club
    this.router.get('/:query', InventoryController.getInventorysQueried);
  }

  postRoutes() {
    // Posting a new Inventory
    this.router.post('/new', InventoryController.postNewInventoryItem);
  }
  putRoutes() {
    // Updating an existing Inventory
    this.router.put('/update', InventoryController.updateInventorys);
  }
  deleteRoutes() {
    // Deleting an existing Inventory
    this.router.delete('/delete', InventoryController.deleteInventorys);
  }
}

export default new InventoryRouter().router;
