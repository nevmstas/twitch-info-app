// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Card } from "./Card";
import { cardsContainer, cardItem } from "../styles/GameList/gameList";
import { GameCardType } from "../inertfaces";
import { Loader } from "./loader/Loader";

type PropsTypes = {
  games: Array<GameCardType>;
  isLoad: boolean;
};

export const GameList: React.FC<PropsTypes> = ({ games, isLoad }) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(8);

  const indexOfLastBuyer = currentPage * gamesPerPage;
  const indexOfFirstBuyer = indexOfLastBuyer - gamesPerPage;
  const currentGames = games.slice(indexOfFirstBuyer, indexOfLastBuyer);

  return (
    <div css={cardsContainer}>
      {isLoad ? (
        <Loader />
      ) : (
        currentGames.map((g: GameCardType, index: number) => (
          <Card
            css={cardItem}
            key={index}
            img={g.game.box.large}
            viewers={g.viewers}
            name={g.game.name}
          />
        ))
      )}

      <Pagination
        page={currentPage}
        onChange={(e, newPage) => setCurrentPage(newPage)}
        count={currentGames.length}
      />
    </div>
  );
};
