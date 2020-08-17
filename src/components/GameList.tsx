// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/actions";
import { Card } from "./Card";
import { cardsContainer, cardItem } from "../styles/GameList/gameList";
import { GamesState, GameCardType } from "../inertfaces";
import { RootState } from "../redux/rootReducer";

type PropsTypes = {
  games: Array<GameCardType>;
};
export const GameList: React.FC<PropsTypes> = ({ games }) => {
  return (
    <div css={cardsContainer}>
      {games &&
        games.map((g: GameCardType, index: number) => (
          <Card
            css={cardItem}
            key={index}
            img={g.game.box.large}
            viewers={g.viewers}
            name={g.game.name}
          />
        ))}
    </div>
  );
};
