import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getCustomerFeedbackAll,
  getCustomersAll,
  getOrdersAll,
} from "../core/core.actions";
import {
  selectCustomerFeedbackAll,
  selectCustomersAll,
  selectOrdersAll,
} from "../core/core.selectors";

// ui
import Cards from "../components/Cards";
import FeedbackBar from "../components/FedbackBar";
//import Bar from "./Bar";
import PieComponent from "../components/charts/pieChart";

// data
import BarChartComponent from "../components/charts/Bar";

const Main = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrdersAll);
  const customers = useAppSelector(selectCustomersAll);
  const customerFeedback = useAppSelector(selectCustomerFeedbackAll);

  useEffect(() => {
    dispatch(getOrdersAll());
    dispatch(getCustomersAll());
    dispatch(getCustomerFeedbackAll());
  }, []);

  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className="">
        <Cards orders={orders} customer={customers} />
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className=" p-6 w-full my-4 lg:w-[60%] bg-white rounded-xl">
          <div className=" text-zinc-900 text-xl font-bold pb-5 flex">
            Last year sales
          </div>
          <BarChartComponent />
        </div>
        <div className=" p-6 w-full my-4 lg:w-[30%] bg-white rounded-xl flex-col flex">
          <div className=" text-zinc-900 text-xl font-bold pb-5 flex">
            Total orders
          </div>
          <PieComponent />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className=" p-6 w-full my-4  bg-white rounded-xl">
          <div className=" text-zinc-900 text-xl font-bold pb-5 flex">
            Customer Feedback
          </div>
          <FeedbackBar customerFeedback={customerFeedback} />
        </div>
      </div>
    </div>
  );
};

export default Main;
