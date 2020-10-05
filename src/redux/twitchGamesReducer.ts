import { SET_GAMES } from "./types";
import { GamesState } from "../inertfaces";

const initialState: GamesState = {
  games: [],
};

export const twitchGamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    default:
      return state;
  }
};
