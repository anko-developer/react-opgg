import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoitApi } from "../../context/RoitApiContext";
import MatchItem from "../MatchItem/MatchItem";

export default function MatchList({puuid}) {
  const { roit } = useRoitApi();

  const {
    data: matchIds
  } = useQuery({
    queryKey: ['matchs', puuid],
    queryFn: () => roit.matchIds(puuid)
  });

  return <div>
    {matchIds && matchIds.map((matchId, index) => <MatchItem key={index} matchId={matchId} />)}
  </div>
    
}
