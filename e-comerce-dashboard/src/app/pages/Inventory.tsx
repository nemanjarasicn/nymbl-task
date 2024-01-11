import React, { useEffect } from "react";
import { getProductsAll } from "../core/core.actions";

// ui
import CustomTable from "../components/table/CustomTable";
import { useAppDispatch } from "../hooks";

const Inventory = () => {
  const dispach = useAppDispatch();

  useEffect(() => {
    dispach(getProductsAll());
  }, []);

  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className=" p-6 w-full my-4 lg:w-full bg-white rounded-xl">
        <div className=" text-zinc-900 text-xl font-bold pb-5 flex">
          Inventory levels
        </div>
        <CustomTable />
      </div>
    </div>
  );
};

export default Inventory;
