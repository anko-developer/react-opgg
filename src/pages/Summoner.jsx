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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {summonerInfo && (
        <p>
          닉네임: {summonerName}
          <br />
          id: {summonerInfo.id}
          name: {summonerInfo.name}
          level: {summonerInfo.summonerLevel}
        </p>
      )}
    </div>
  );
}
