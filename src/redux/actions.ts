import { Action } from "redux";
import { RootState } from "../redux/rootReducer";
import { ThunkAction } from "redux-thunk";

import { FETCH_GAMES } from "./types";

export const fetchGames = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const response = await fetch(
    "https://api.twitch.tv/kraken/games/top?limit=100",
    {
      headers: {
        Accept: "application/vnd.twitchtv.v5+json",
        "Client-ID": "lb30znza29uxvo1sgjgzmpgik2lbeo",
      },
    }
  );

  const json = await response.json();
  console.log(json);
  dispatch({ type: FETCH_GAMES, payload: json.top });
};
