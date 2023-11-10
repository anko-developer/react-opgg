import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoitApi } from "../context/RoitApiContext";
import { useParams } from "react-router-dom";

export default function Summoner() {
  const { roit } = useRoitApi();
  const { summonerName } = useParams();
  const {
    isLoading,
    error,
    data: summonerInfo,
  } = useQuery({
    queryKey: ["summoner", summonerName],
    queryFn: () => roit.searchSummoner(summonerName),
  });

  console.log(summonerInfo);

  return (
    <section>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {summonerInfo && (
        <div>
          <div>
            <img
              src={`https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon${summonerInfo.profileIconId}.jpg`}
              alt="profile icon"
            />
            <p>레벨: {summonerInfo.summonerLevel}</p>
          </div>
          <h2>{summonerInfo.name}</h2>
        </div>
      )}
    </section>
  );
}
