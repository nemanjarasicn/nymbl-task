import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

import { selectOrdersAll, selectUser } from "../../core/core.selectors";
import { useAppSelector } from "../../hooks";
import { createDataPie } from "../../utils/utils";
import { UserAuth } from "@e-comerce/app/core/core.models";

// data
import { dataPie, COLORS } from "../../datas/constants";

interface RenderCustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: RenderCustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieComponent = () => {
  const orders = useAppSelector(selectOrdersAll);
  const user = useAppSelector(selectUser);
  const dataPieCalculated = createDataPie(dataPie, orders, user as UserAuth);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Legend layout="horizontal" verticalAlign="bottom" />
        <Pie
          data={dataPieCalculated}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="total"
        >
          {dataPie.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieComponent;
