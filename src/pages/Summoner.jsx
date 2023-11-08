import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Summoner() {
  const client = axios.create({
    baseURL: "https://kr.api.riotgames.com/lol/",
    params: { api_key: process.env.REACT_APP_RIOT_API_KEY },
  });

  const info = async () => {
    return client
      .get("summoner/v4/summoners/by-name/hide on bush")
      .then((res) => res.data)
      .catch((error) => console.log(error));
  };

  const {
    isLoading,
    error,
    data: summonerInfo,
  } = useQuery({
    queryKey: ["summoner"],
    queryFn: () => info(),
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {summonerInfo && (
        <p>
          id: {summonerInfo.id}
          name: {summonerInfo.name}
          level: {summonerInfo.summonerLevel}
        </p>
      )}
    </div>
  );
}
