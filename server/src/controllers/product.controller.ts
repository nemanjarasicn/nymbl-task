import { Request, Response } from "express";

import productsRepository from "../repositories/products.repository";

export default class ProductsController {
  async findAll(req: Request, res: Response) {
    try {
      // Extract page and pageSize from request query
      const page = req.query.page ? parseInt(req.query.page as string) : 1;
      const pageSize = req.query.pageSize
        ? parseInt(req.query.pageSize as string)
        : 20;

      // Call retrieveAll with the extracted parameters
      const orders = await productsRepository.retrieveAll(page, pageSize);

      res.status(200).send(orders);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving orders.",
      });
    }
  }
}
