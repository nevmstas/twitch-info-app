import { FETCH_GAMES, SHOW_LOADER, HIDE_LOADER } from "./types";

export const fetchGames = () => {
  return {
    type: FETCH_GAMES,
  };
};
