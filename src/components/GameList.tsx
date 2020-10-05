// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

import { Card } from "./Card";
import { cardsContainer, cardItem } from "../styles/GameList/gameList";
import { GameCardType } from "../inertfaces";
import { Loader } from "./loader/Loader";

type PropsTypes = {
  games: Array<GameCardType>;
  isLoad: boolean;
};

export const GameList: React.FC<PropsTypes> = ({ games, isLoad }) => {
  return (
    <div css={cardsContainer}>
      {isLoad ? (
        <Loader />
      ) : (
        games.map((g: GameCardType, index: number) => (
          <Card
            css={cardItem}
            key={index}
            img={g.game.box.large}
            viewers={g.viewers}
            name={g.game.name}
          />
        ))
      )}
    </div>
  );
};
