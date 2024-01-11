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

// data
import { dataTm } from "../../datas/constants";
import { useAppSelector } from "../../hooks";
import { selectOrdersAll } from "../../core/core.selectors";
import { createDataBar } from "../../utils/utils";

const BarChartComponent = () => {
  const orders = useAppSelector(selectOrdersAll);
  const dataBar = createDataBar(dataTm, orders);

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
