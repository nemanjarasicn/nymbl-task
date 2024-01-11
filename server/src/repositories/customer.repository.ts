import connection from "../db";

import Customer from "../models/customer.model";
import CustomerFeedback from "../models/customer.model";

interface ICustomersRepository {
  retrieveAll(): Promise<Customer[]>;
  retrieveAllfeedback(): Promise<CustomerFeedback[]>;
}

class CustomersRepository implements ICustomersRepository {
  retrieveAll(): Promise<Customer[]> {
    const query: string = "SELECT * FROM customer";

    return new Promise((resolve, reject) => {
      connection.query<Customer[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  retrieveAllfeedback(): Promise<CustomerFeedback[]> {
    const query: string = "SELECT * FROM customer_feedback";

    return new Promise((resolve, reject) => {
      connection.query<CustomerFeedback[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

export default new CustomersRepository();
