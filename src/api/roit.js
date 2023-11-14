import axios from "axios";

export default class Roit {
  constructor() {
    // SUMMONER-V4, ACCOUNT-V1, LEAGE-V4
    this.krClient = axios.create({
      baseURL: "https://kr.api.riotgames.com/lol/",
      params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
    });
    
    // Match-V5, Tournament API
    this.asiaClient = axios.create({
      baseURL: "https://asia.api.riotgames.com/lol/",
      params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
    });
  }

  async searchSummoner(summonerName) {
    return this.krClient
      .get(`summoner/v4/summoners/by-name/${summonerName}`)
      .then((response) => response.data);
  }
  
  async matchIds(puuid) {
    return this.asiaClient
      .get(`match/v5/matches/by-puuid/${puuid}/ids`, {
        params: {
          start: 0,
          count: 10,
        }
      })
      .then((response) => response.data);
  }

  async matchResult(matchId) {
    return this.asiaClient
      .get(`match/v5/matches/${matchId}`)
      .then((response) => response.data);
  }
}
