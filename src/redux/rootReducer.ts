import { combineReducers } from "redux";
import { twitchGamesReducer } from "./twitchGamesReducer";

export const rootReducer = combineReducers({
  twitchGames: twitchGamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
