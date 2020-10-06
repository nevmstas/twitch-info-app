export default class ApiService {
  _devEndpoint = "https://api.twitch.tv/kraken/";

  //games/top?limit=100
  getData = async (body) => {
    try {
      const response = await fetch(`${this._devEndpoint}${body}`, {
        headers: {
          Accept: "application/vnd.twitchtv.v5+json",
          "Client-ID": "lb30znza29uxvo1sgjgzmpgik2lbeo",
        },
      });
      const json = await response.json();
      return json;
    } catch (e) {
      return e.response;
    }
  };

  getGames = async () => {
    return await this.getData("games/top?limit=100");
  };
}
