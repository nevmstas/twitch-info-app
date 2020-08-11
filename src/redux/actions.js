import { FETCH_GAMES } from "./types";

export const fetchGames = () => async (dispatch) => {
  const response = await fetch(
    "https://api.twitch.tv/kraken/games/top?limit=20",
    {
      headers: {
        Accept: "application/vnd.twitchtv.v5+json",
        "Client-ID": "lb30znza29uxvo1sgjgzmpgik2lbeo",
      },
    }
  );
  const json = await response.json();
  console.log(json.top);
  dispatch({ type: FETCH_GAMES, payload: json.top });
};
