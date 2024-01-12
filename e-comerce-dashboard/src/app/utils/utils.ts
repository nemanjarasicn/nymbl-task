// models

import {
  Customer,
  CustomerFeedback,
  DataPieType,
  MonthsYear,
  Orders,
  UserAuth,
} from "../core/core.models";

const currencyFormat = (num: number) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const listSumOrders = (data: Orders[]) => {
  let sum = 0;
  data.forEach((order: Orders) => {
    sum += parseFloat(order.order_total_usd);
  });
  return sum;
};

const createCardsData = (
  orders: Orders[],
  customer: Customer[],
  text: string,
  user: UserAuth
) => {
  let value: number;
  let valuePrev: number;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Handle January (0-based index)
  const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  // for current month
  const totalOrders = orders.filter((item) => {
    const orderMonth = new Date(item.timestamp).getMonth();
    const orderYear = new Date(item.timestamp).getFullYear();
    return (
      orderMonth === currentMonth &&
      orderYear === currentYear &&
      item.user_id === user.user.id
    );
  });

  const netSales = listSumOrders(totalOrders);

  const newCustomer = customer.filter((item) => {
    const orderMonth = new Date(item.registration_date).getMonth();
    const orderYear = new Date(item.registration_date).getFullYear();
    return (
      orderMonth === currentMonth &&
      orderYear === currentYear &&
      item.user_id === user.user.id
    );
  });

  const canseledOrders = totalOrders.filter(
    (item: { status: string; user_id: number }) =>
      item.status === "canseled" && item.user_id === user.user.id
  ).length;

  // for prev month
  const totalOrdersPrevMonth = orders.filter((item) => {
    const orderMonth = new Date(item.timestamp).getMonth();
    const orderYear = new Date(item.timestamp).getFullYear();
    return (
      orderMonth === prevMonth &&
      orderYear === prevYear &&
      item.user_id === user.user.id
    );
  });

  const netSalesPrevMonth = listSumOrders(totalOrdersPrevMonth);

  const newCustomerPrevMonth = customer.filter((item) => {
    const orderMonth = new Date(item.registration_date).getMonth();
    const orderYear = new Date(item.registration_date).getFullYear();
    return (
      orderMonth === prevMonth &&
      orderYear === prevYear &&
      item.user_id === user.user.id
    );
  });

  const canseledOrdersPrevMonth = totalOrdersPrevMonth.filter(
    (item: { status: string; user_id: number }) =>
      item.status === "canseled" && item.user_id === user.user.id
  ).length;

  switch (text) {
    case "Total orders":
      value = totalOrders.length;
      valuePrev =
        totalOrdersPrevMonth.length - totalOrders.length
          ? ((totalOrdersPrevMonth.length - totalOrders.length) /
              totalOrdersPrevMonth.length) *
            100
          : 0;
      break;

    case "Customer":
      value = newCustomer.length;
      valuePrev =
        newCustomerPrevMonth.length - newCustomer.length
          ? ((newCustomerPrevMonth.length - newCustomer.length) /
              newCustomerPrevMonth.length) *
            100
          : 0;
      break;

    case "Net sales":
      value = netSales;
      valuePrev =
        netSalesPrevMonth - netSales
          ? ((netSalesPrevMonth - netSales) / netSalesPrevMonth) * 100
          : 0;
      break;
    case "Cancelled orders":
      value = canseledOrders;
      valuePrev =
        canseledOrdersPrevMonth - canseledOrders
          ? ((canseledOrdersPrevMonth - canseledOrders) /
              canseledOrdersPrevMonth) *
            100
          : 0;
      break;

    default:
      value = 0;
      valuePrev = 0;
  }

  return { value, valuePrev };
};

const createFeedbackData = (
  customerFeedback: CustomerFeedback[],
  text: string,
  user: UserAuth
) => {
  let value: number;

  // calculate customer feedback
  const totalRating = customerFeedback.filter(
    (item) => item.user_id === user.user.id
  ).length;
  const totalRating1 = customerFeedback.filter(
    (item) => item.rating === 1 && item.user_id === user.user.id
  ).length;
  const totalRating2 = customerFeedback.filter(
    (item) => item.rating === 2 && item.user_id === user.user.id
  ).length;
  const totalRating3 = customerFeedback.filter(
    (item) => item.rating === 3 && item.user_id === user.user.id
  ).length;
  const totalRating4 = customerFeedback.filter(
    (item) => item.rating === 4 && item.user_id === user.user.id
  ).length;
  const totalRating5 = customerFeedback.filter(
    (item) => item.rating === 5 && item.user_id === user.user.id
  ).length;

  switch (text) {
    case "rating1":
      value = totalRating1;
      break;

    case "rating2":
      value = totalRating2;
      break;

    case "rating3":
      value = totalRating3;
      break;
    case "rating4":
      value = totalRating4;
      break;

    case "rating5":
      value = totalRating5;
      break;

    default:
      value = 0;
  }

  return ((value / totalRating) * 100).toFixed(1);
};

const createDataBar = (
  data: MonthsYear[],
  orders: Orders[],
  user: UserAuth
) => {
  const currentYear = new Date().getFullYear();

  const calculatedDataBar = data.map((item: MonthsYear) => {
    const dataOrdersTmp = orders.filter((order) => {
      const orderMonth = new Date(order.timestamp).getMonth();
      const orderYear = new Date(order.timestamp).getFullYear();
      return (
        orderMonth === item.id &&
        orderYear === currentYear - 1 &&
        order.user_id === user.user.id
      );
    });
    return {
      ...item,
      netSales: listSumOrders(dataOrdersTmp),
    };
  });

  return calculatedDataBar;
};

const createDataPie = (
  data: DataPieType[],
  orders: Orders[],
  user: UserAuth
) => {
  const calculatedDataPie = data.map((item: DataPieType) => {
    const total = orders.filter(
      (order) => order.status === item.name && order.user_id === user.user.id
    ).length;
    return {
      ...item,
      total: total,
    };
  });

  return calculatedDataPie;
};

export {
  listSumOrders,
  currencyFormat,
  createCardsData,
  createFeedbackData,
  createDataBar,
  createDataPie,
};
