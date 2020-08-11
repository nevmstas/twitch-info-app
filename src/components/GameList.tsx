import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../redux/actions";
import { Card } from "./Card";

interface GamesState {
  games: Array<GameCardType>;
}

interface GameCardType {
  channels: number;
  game: GameInfo;
  viewers: number;
}
interface BoxType {
  large: string;
  medium: string;
  small: string;
  template: string;
}
interface GameInfo {
  box: BoxType;
  giantbomb_id: number;
  locale: string;
  localized_name: string;
  logo: BoxType;
  name: string;
  _id: number;
}

export const GameList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: GamesState) => state.games);
  console.log("games", games);

  const handleClick = () => {
    dispatch(fetchGames());
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>Twitch</div>
      {/* {games && games.map((g : GameCardType) => <Card img={g.game.box.large} viewers={g.viewers} name ={g.game.name}/>)} */}
      <button onClick={handleClick}>get twitch data</button>
    </>
  );
};
