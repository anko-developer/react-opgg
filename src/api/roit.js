import axios from "axios";

export default class Roit {
  constructor() {
    this.krClient = axios.create({
      baseURL: "https://kr.api.riotgames.com/lol/",
      params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
    });

    this.asiaClient = axios.create({
      baseURL: "https://asia.api.riotgames.com/lol/",
      params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
    });
  }

  async searchSummoner(summonerName) {
    return this.krClient
      .get(`summoner/v4/summoners/by-name/${summonerName}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
}
