import { Request, Response } from "express";

import customerRepository from "../repositories/customer.repository";

export default class CustomerController {
  async findAll(req: Request, res: Response) {
    try {
      const customers = await customerRepository.retrieveAll();

      res.status(200).send(customers);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving customers.",
      });
    }
  }

  async findAllfeedback(req: Request, res: Response) {
    try {
      const customers = await customerRepository.retrieveAllfeedback();

      res.status(200).send(customers);
    } catch (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving customers feedback.",
      });
    }
  }
}
