import { FETCH_GAMES } from "./types";
import { GamesState } from "../inertfaces";

const initialState: GamesState = {
  games: [],
};

export const twitchGamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};
