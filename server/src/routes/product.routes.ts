import { Router } from "express";
import ProductsController from "../controllers/product.controller";
import authenticateToken from "../middleware/authenticateToken";

class ProductsRoutes {
  router = Router();
  controller = new ProductsController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get a list of orders placed by users and their status.
    this.router.get("/", authenticateToken, this.controller.findAll);
  }
}

export default new ProductsRoutes().router;
