import { combineReducers } from "redux";
import { twitchGamesReducer } from "./twitchGamesReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  twitchGames: twitchGamesReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
