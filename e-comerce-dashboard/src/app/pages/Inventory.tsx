import React, { useEffect } from "react";
import { getProductsAll } from "../core/core.actions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectUser } from "../core/core.selectors";

// ui
import CustomTable from "../components/table/CustomTable";
import { UserAuth } from "../core/core.models";

const Inventory = () => {
  const dispach = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (user && user.user) {
      dispach(getProductsAll({ userId: user?.user.id }));
    }
  }, []);

  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className=" p-6 w-full my-4 lg:w-full bg-white rounded-xl">
        <div className=" text-zinc-900 text-xl font-bold pb-5 flex">
          Inventory levels
        </div>
        <CustomTable user={user as UserAuth} />
      </div>
    </div>
  );
};

export default Inventory;
