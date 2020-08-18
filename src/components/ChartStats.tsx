// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ViewersChart } from "./charts/ViewersChart";
import { ChannelChart } from "./charts/ChannelChart";
import { GamesState, GameCardType } from "../inertfaces";
import { fetchGames } from "../redux/actions";

import { RootState } from "../redux/rootReducer";
import { Loader } from "./loader/Loader";
import { ChartContainer } from "../styles/charts/chartContainer";

type PropsTypes = {
  games: Array<GameCardType>;
};

export const ChartStats = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.twitchGames.games);
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  useEffect(() => {
    dispatch(fetchGames());
    console.log(games);
  }, []);

  return (
    <div css={ChartContainer}>
      <ViewersChart games={games} />
      <ChannelChart games={games} />
    </div>
  );
};
