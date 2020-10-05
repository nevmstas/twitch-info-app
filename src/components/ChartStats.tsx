// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { ViewersChart } from "./charts/ViewersChart";
import { ChannelChart } from "./charts/ChannelChart";
import { GameCardType } from "../inertfaces";
import { Loader } from "./loader/Loader";
import { ChartContainer } from "../styles/charts/chartContainer";

type PropsTypes = {
  games: Array<GameCardType>;
  isLoad: boolean;
};

export const ChartStats: React.FC<PropsTypes> = ({ games, isLoad }) => {
  return (
    <div css={ChartContainer}>
      {isLoad ? (
        <Loader />
      ) : (
        <React.Fragment>
          <ViewersChart games={games} />
          <ChannelChart games={games} />
        </React.Fragment>
      )}
    </div>
  );
};
