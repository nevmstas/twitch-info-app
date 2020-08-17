// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React, { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { GameCardType } from "../../inertfaces";

import { ChartContainer } from "../../styles/charts/chartContainer";

type chartData = {
  name: string;
  viewers: number;
};

type PropsTypes = {
  games: Array<GameCardType>;
};

export const ViewersChart: React.FC<PropsTypes> = ({ games }) => {
  const [chartData, setChartData] = useState<Array<chartData>>([]);

  //const newData = [];
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i <= 5; i++) {
      const obj = {
        name: games[i].game.name,
        viewers: games[i].viewers,
      };
      console.log(obj);
      newArray.push(obj);
    }
    setChartData(newArray);
  }, [games]);

  return (
    <div>
      <BarChart
        width={1000}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="viewers" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};
