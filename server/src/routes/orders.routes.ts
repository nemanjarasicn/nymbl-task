import { Router } from "express";
import OrdersController from "../controllers/orders.controller";
import authenticateToken from "../middleware/authenticateToken";

class OrdersRoutes {
  router = Router();
  controller = new OrdersController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get a list of orders placed by users and their status.
    this.router.get("/", authenticateToken, this.controller.findAll);
  }
}

export default new OrdersRoutes().router;
