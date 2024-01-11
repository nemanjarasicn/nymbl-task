import { Request, Response } from "express";

import authRepository from "../repositories/auth.repository";

export default class OrdersController {
  async authLogin(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const credentials = { username, password };

      authRepository.authLogin(credentials, (error, token, user) => {
        if (error) {
          console.error(error);
          res.status(401).json({ error: error });
        } else {
          res.status(200).json({ token, user });
        }
      });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Some error occurred while auth login." });
    }
  }
}
