import React from "react";
import { ViewersChart } from "./charts/ViewersChart";
import { GamesState, GameCardType } from "../inertfaces";
type PropsTypes = {
  games: Array<GameCardType>;
};
export const ChartStats: React.FC<PropsTypes> = ({ games }) => {
  return (
    <div>
      <ViewersChart games={games} />
    </div>
  );
};
