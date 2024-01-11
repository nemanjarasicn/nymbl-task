import { Application } from "express";
import ordersRoutes from "./orders.routes";
import customerRoutes from "./customer.routes";
import productRoutes from "./product.routes";
import authRoutes from "./auth.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/orders", ordersRoutes);
    app.use("/api/customer", customerRoutes);
    app.use("/api/products", productRoutes);
    app.use("/api/auth", authRoutes);
  }
}
