import { ActionReducerMapBuilder, createSlice, Slice } from "@reduxjs/toolkit";

import {
  Customer,
  CustomerFeedback,
  Orders,
  Products,
  UserAuth,
} from "./core.models";
import {
  authLogin,
  getCustomerFeedbackAll,
  getCustomersAll,
  getOrdersAll,
  getProductsAll,
  getProductsAllPage,
} from "./core.actions";

const CORE_KEY = "core";

export interface CoreState {
  user: Partial<UserAuth> | null;
  loading: boolean;
  errorSession: string;
  orders: Orders[];
  customers: Customer[];
  customerFeedback: CustomerFeedback[];
  products: Products[];
  productsAll: Products[];
  openModal: boolean;
  selectedSidebarItem: string;
}

const initialState: CoreState = {
  user: null,
  loading: false,
  errorSession: "",
  orders: [],
  customers: [],
  customerFeedback: [],
  products: [],
  productsAll: [],
  openModal: false,
  selectedSidebarItem: "dashboard",
};

const authSlice: Slice<CoreState> = createSlice({
  name: CORE_KEY,
  initialState,
  reducers: {
    setSidebarItem: (state, { payload }) => ({
      ...state,
      selectedSidebarItem: payload,
    }),
    setErrorSession: (state, { payload }) => ({
      ...state,
      errorSession: payload,
    }),
    setOpenModal: (state, { payload }) => ({
      ...state,
      openModal: payload,
    }),
  },
  extraReducers: (builder) => {
    loginAsync(builder);
    getAsyncOrdersAll(builder);
    getAsyncCustomersAll(builder);
    getAsyncCustomerFeedbackAll(builder);
    getAsyncProductsAllPage(builder);
    getAsyncProductsAll(builder);
  },
});

export const { setSidebarItem, setErrorSession, setOpenModal } =
  authSlice.actions;

export default authSlice.reducer;

function loginAsync(builder: ActionReducerMapBuilder<CoreState>) {
  builder.addCase(authLogin.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    user: payload,
  }));
  builder.addCase(authLogin.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(authLogin.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while authentification",
  }));
}

function getAsyncOrdersAll(builder: ActionReducerMapBuilder<CoreState>) {
  builder.addCase(getOrdersAll.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    orders: payload as Orders[],
  }));
  builder.addCase(getOrdersAll.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getOrdersAll.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while fech orders data",
  }));
}

function getAsyncCustomersAll(builder: ActionReducerMapBuilder<CoreState>) {
  builder.addCase(getCustomersAll.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    customers: payload as Customer[],
  }));
  builder.addCase(getCustomersAll.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getCustomersAll.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while feching customer data",
  }));
}

function getAsyncCustomerFeedbackAll(
  builder: ActionReducerMapBuilder<CoreState>
) {
  builder.addCase(getCustomerFeedbackAll.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    customerFeedback: payload as CustomerFeedback[],
  }));
  builder.addCase(getCustomerFeedbackAll.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getCustomerFeedbackAll.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while fetching customer feedback data",
  }));
}

function getAsyncProductsAllPage(builder: ActionReducerMapBuilder<CoreState>) {
  builder.addCase(getProductsAllPage.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    products: payload as Products[],
  }));
  builder.addCase(getProductsAllPage.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getProductsAllPage.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while fetching products data",
  }));
}

function getAsyncProductsAll(builder: ActionReducerMapBuilder<CoreState>) {
  builder.addCase(getProductsAll.fulfilled, (state, { payload }) => ({
    ...state,
    loading: false,
    error: "",
    productsAll: payload as Products[],
  }));
  builder.addCase(getProductsAll.pending, (state) => ({
    ...state,
    loading: true,
  }));
  builder.addCase(getProductsAll.rejected, (state) => ({
    ...state,
    loading: false,
    error: "error while fetching products all data",
  }));
}
