import connection from "../db";

import Product from "../models/product.model";

interface IProductsRepository {
  retrieveAll(page: number, pageSize: number): Promise<Product[]>;
}

class ProductsRepository implements IProductsRepository {
  retrieveAll(page: number, pageSize: number): Promise<Product[]> {
    // If page is set to 0, return all products without pagination
    if (page === 0) {
      const query: string = `SELECT * FROM products`;

      return new Promise((resolve, reject) => {
        connection.query<Product[]>(query, (err, res) => {
          if (err) reject(err);
          else resolve(res);
        });
      });
    }

    // Calculate the offset based on the page number and page size
    const offset = (page - 1) * pageSize;

    // Use the LIMIT and OFFSET clauses in the SQL query
    const query: string = `SELECT * FROM products LIMIT ${pageSize} OFFSET ${offset}`;

    return new Promise((resolve, reject) => {
      connection.query<Product[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

export default new ProductsRepository();
