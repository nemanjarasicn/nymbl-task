import { Router } from "express";
import CustomerController from "../controllers/customer.controller";
import authenticateToken from "../middleware/authenticateToken";

class CustomerRoutes {
  router = Router();
  controller = new CustomerController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get a list of orders placed by users and their status.
    this.router.get("/", authenticateToken, this.controller.findAll);
    this.router.get(
      "/feedback",
      authenticateToken,
      this.controller.findAllfeedback
    );
  }
}

export default new CustomerRoutes().router;
