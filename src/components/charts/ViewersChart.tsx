import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { GamesState, GameCardType } from "../../inertfaces";
import { fetchGames } from "../../redux/actions";

type chartDate = {
  name: string;
  pv: number;
};
type PropsTypes = {
  games: Array<GameCardType>;
};
export const ViewersChart: React.FC<PropsTypes> = ({ games }) => {
  const newData = [];

  for (let i = 0; i <= 5; i++) {
    const obj = {
      name: games[i].game.name,
      pv: games[i].viewers,
    };
    newData.push(obj);
  }

  return (
    <BarChart
      width={1000}
      height={300}
      data={newData}
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
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
};
