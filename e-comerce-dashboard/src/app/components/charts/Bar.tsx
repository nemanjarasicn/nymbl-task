import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../hooks";
import { selectOrdersAll, selectUser } from "../../core/core.selectors";
import { createDataBar } from "../../utils/utils";
import { UserAuth } from "@e-comerce/app/core/core.models";

// data
import { dataTm } from "../../datas/constants";

const BarChartComponent = () => {
  const orders = useAppSelector(selectOrdersAll);
  const user = useAppSelector(selectUser);
  const dataBar = createDataBar(dataTm, orders, user as UserAuth);

  return (
    <div className=" w-full">
      <div className=" justify-start items-start gap-2 flex flex-wrap">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={550}
            height={500}
            data={dataBar}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="netSales"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
