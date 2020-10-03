import { Action } from "redux";
import { RootState } from "../redux/rootReducer";
import { ThunkAction } from "redux-thunk";

import { FETCH_GAMES, SHOW_LOADER, HIDE_LOADER } from "./types";

import ApiService from "../services/api";

const apiService = new ApiService();

export const fetchGames = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch({ type: SHOW_LOADER });
  const json = await apiService.getData("games/top?limit=100");
  dispatch({ type: FETCH_GAMES, payload: json.top });
  dispatch({ type: HIDE_LOADER });
};
