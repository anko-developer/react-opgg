import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRoitApi } from "../context/RoitApiContext";
import { useParams } from "react-router-dom";
import MatchList from "../components/MatchList/MatchList";

export default function Summoner() {
  const [ uuid, setUuid ] = useState('');
  const [ lists, setLists ] = useState([]);
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

  // const {
  //   data: matchs
  // } = useQuery({
  //   queryKey: ['matchs', uuid],
  //   queryFn: () => roit.matchs(uuid)
  // })

  // useEffect(() => {
  //   setUuid(summonerInfo ? summonerInfo.puuid : '');
    
  // }, [summonerInfo]);
  // console.log(matchs);
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
          <MatchList puuid={summonerInfo.puuid} />
        </div>
      )}
    </section>
  );
}
