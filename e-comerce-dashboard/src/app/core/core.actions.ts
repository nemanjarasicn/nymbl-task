import { createAsyncThunk } from "@reduxjs/toolkit";
import AppService from "./app.service";
import AuthService from "./auth.services";
import { Credentials } from "./core.models";

/**
 * Auth Async
 */
const authLogin = createAsyncThunk(
  "POST/AuthLogin",
  async ({ credentials }: { credentials: Credentials }, _) => {
    return await AuthService.authLogin(credentials)
      .then((res) => {
        sessionStorage.setItem("token", JSON.stringify(res.data.token));
        //delete res.data.token;
        return res.data;
      })
      .catch(() => {
        return _.rejectWithValue({
          error: `Bad Credentials`,
        });
      });
  }
);

/**
 * Get Async Orders
 */
const getOrdersAll = createAsyncThunk("GET/OrdersAll", async () => {
  return await AppService.getOrdersAll()
    .then((res) => res.data)
    .catch(() => []);
});

/**
 * Get Async Customer
 */
const getCustomersAll = createAsyncThunk("GET/CustomersAll", async () => {
  return await AppService.getCustomersAll()
    .then((res) => res.data)
    .catch(() => []);
});

/**
 * Get Async Customer feedback
 */
const getCustomerFeedbackAll = createAsyncThunk(
  "GET/CustomerFeedbackAll",
  async () => {
    return await AppService.getCustomerFeedbackAll()
      .then((res) => res.data)
      .catch(() => []);
  }
);

/**
 * Get Async Products for page
 */
const getProductsAllPage = createAsyncThunk(
  "GET/ProductsAllPage",
  async ({ page, pageSize }: { page: number; pageSize: number }) => {
    return await AppService.getProductsAllPage(page, pageSize)
      .then((res) => res.data)
      .catch(() => []);
  }
);

/**
 * Get Async Products all
 */
const getProductsAll = createAsyncThunk("GET/ProductsAll", async () => {
  return await AppService.getProductsAllPage(0, 0)
    .then((res) => res.data)
    .catch(() => []);
});

export {
  getOrdersAll,
  getCustomersAll,
  getCustomerFeedbackAll,
  getProductsAllPage,
  getProductsAll,
  authLogin,
};
