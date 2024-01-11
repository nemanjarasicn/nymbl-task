import { Request, Response } from "express";

import ordersRepository from "../repositories/orders.repository";

export default class OrdersController {
  async findAll(req: Request, res: Response) {
    try {
      const orders = await ordersRepository.retrieveAll();

      res.status(200).send(orders);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving orders.",
      });
    }
  }
}
