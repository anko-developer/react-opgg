import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoitApi } from "../../context/RoitApiContext";

export default function MatchItem({matchId}) {
  const { roit } = useRoitApi();
  const {
    data: result
  } = useQuery({
    queryKey: ['matchResult', matchId],
    queryFn: () => roit.matchResult(matchId)
  });

  return <li>{result && result.info.gameName}</li>;
}
