import axios from "axios";

export default class Roit {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://kr.api.riotgames.com/lol/",
      params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
    });
  }

  async searchSummoner(summonerName) {
    return this.httpClient
      .get(`summoner/v4/summoners/by-name/${summonerName}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
}
