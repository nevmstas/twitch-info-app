// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewersChart } from "./charts/ViewersChart";
import { ChannelChart } from "./charts/ChannelChart";
import { GamesState, GameCardType } from "../inertfaces";
import { RootState } from "../redux/rootReducer";
import { Loader } from "./loader/Loader";
import { ChartContainer } from "../styles/charts/chartContainer";
import { FETCH_GAMES } from "../redux/types";

type PropsTypes = {
  games: Array<GameCardType>;
};

export const ChartStats = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.twitchGames.games);
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  useEffect(() => {
    dispatch({ type: FETCH_GAMES });
  }, [dispatch]);

  return (
    <div css={ChartContainer}>
      {isLoading ? (
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
