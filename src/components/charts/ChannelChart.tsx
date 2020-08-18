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

import { ChartContainer, Headling } from "../../styles/charts/chartContainer";

type chartData = {
  name: string;
  channels: number;
};

type PropsTypes = {
  games: Array<GameCardType>;
};

export const ChannelChart: React.FC<PropsTypes> = ({ games }) => {
  const [chartData, setChartData] = useState<Array<chartData>>([]);

  //const newData = [];
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i <= 5; i++) {
      const obj = {
        name: games[i].game.name,
        channels: games[i].channels,
      };
      console.log(obj);
      newArray.push(obj);
    }
    setChartData(newArray);
  }, [games]);

  return (
    <div>
      <h1 css={Headling}>Channel chart</h1>
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
        <Bar dataKey="channels" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};
