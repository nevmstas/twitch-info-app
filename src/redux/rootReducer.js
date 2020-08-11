import { combineReducers } from "redux";
import { twitchGamesReducer } from "./twitchGamesReducer";

export const rootReducer = combineReducers({
  twitchGamesReducer,
});
