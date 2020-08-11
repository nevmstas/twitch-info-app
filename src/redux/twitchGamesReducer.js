import { FETCH_GAMES } from "./types";
const initialState = {
  games: [],
};

export const twitchGamesReducer = (state = initialState, action) => {
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
