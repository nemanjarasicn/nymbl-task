import connection from "../db";

import Order from "../models/order.model";

interface IOrdersRepository {
  retrieveAll(): Promise<Order[]>;
}

class OrdersRepository implements IOrdersRepository {
  retrieveAll(): Promise<Order[]> {
    const query: string = "SELECT * FROM orders";

    return new Promise((resolve, reject) => {
      connection.query<Order[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

export default new OrdersRepository();
