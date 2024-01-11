import { Router } from "express";
import AuthController from "../controllers/auth.controller";

class AuthRoutes {
  router = Router();
  controller = new AuthController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // Get a list of orders placed by users and their status.
    this.router.post("/login", this.controller.authLogin);
  }
}

export default new AuthRoutes().router;
