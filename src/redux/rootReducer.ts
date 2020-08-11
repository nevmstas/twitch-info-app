import { combineReducers } from "redux";
import { twitchGamesReducer } from "./twitchGamesReducer";

export const rootReducer = combineReducers({
  games: twitchGamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
