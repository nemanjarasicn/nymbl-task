import httpClient from "../http-common";
import { Customer, CustomerFeedback, Orders, Products } from "./core.models";

class AppService {
  getOrdersAll() {
    return httpClient.get<Orders>("orders");
  }

  getCustomersAll() {
    return httpClient.get<Customer>("customer");
  }

  getCustomerFeedbackAll() {
    return httpClient.get<CustomerFeedback>("customer/feedback");
  }

  getProductsAllPage(page: number, pageSize: number) {
    return httpClient.get<Products>(
      `products?page=${page}&pageSize=${pageSize}`
    );
  }
}

export default new AppService();
