import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CoreState } from "./core.reducer";

/**
 * Core Selectors
 */
const coreSelectors = (state: RootState) => state.core;

/**
 * Select user
 */
export const selectUser = createSelector(
  coreSelectors,
  (state: CoreState) => state.user
);

/**
 * Select loading
 */
export const selectLoading = createSelector(
  coreSelectors,
  (state: CoreState) => state.loading
);

/**
 * Select orders all
 */
export const selectOrdersAll = createSelector(
  coreSelectors,
  (state: CoreState) => state.orders
);

/**
 * Select error session
 */
export const selectErrorSession = createSelector(
  coreSelectors,
  (state: CoreState) => state.errorSession
);

/**
 * Select Customer all
 */
export const selectCustomersAll = createSelector(
  coreSelectors,
  (state: CoreState) => state.customers
);

/**
 * Select customer feedback all
 */
export const selectCustomerFeedbackAll = createSelector(
  coreSelectors,
  (state: CoreState) => state.customerFeedback
);

/**
 * Select Product all per page
 */
export const selectProductsAllPage = createSelector(
  coreSelectors,
  (state: CoreState) => state.products
);

/**
 * Select Product all
 */
export const selectProductsAll = createSelector(
  coreSelectors,
  (state: CoreState) => state.productsAll
);

/**
 * Select open modal
 */
export const selectOpenModal = createSelector(
  coreSelectors,
  (state: CoreState) => state.openModal
);

/**
 * Select sidebar item
 */
export const selectSidebarItem = createSelector(
  coreSelectors,
  (state: CoreState) => state.selectedSidebarItem
);
