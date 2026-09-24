"use client";

import React from "react";

import { PlayerRankings } from "../providers/types";
import { Player, Team, PlayerTribes } from "../data/types";
import { players } from "../data/players";
import PlayerCard from "./playerCard";
// import { tribeColors } from "../utils/colors";
import { PointStringMap } from "../utils/format";

const styles: Record<string, React.CSSProperties> = {
  playersGroup: {
    gap: "15px",
    marginBottom: "15px",
  },
  tribeDetailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px",
    paddingBottom: "5px",
    borderBottom: "1px solid var(--component-text-color-secondary)",
  },
  tribeName: {
    fontSize: "16pt",
  },
  tribeColorIndicator: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    border: "2px solid var(--component-text-color-primary)",
  },
  legend: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "15px",
    padding: "10px",
    gap: "15px",
    backgroundColor: "var(--component-background-color-primary)",
    width: "fit-content",
    fontSize: "10pt",
  },
};

const tribeGroups: Record<PlayerTribes, Player[]> = players.reduce(
  (acc, player) => {
    const { tribe } = player;
    if (!acc[tribe]) {
      acc[tribe] = [];
    }
    acc[tribe].push(player);
    return acc;
  },
  {} as Record<PlayerTribes, Player[]>,
);

export default function Scores(props: {
  thisWeekRankings: PlayerRankings;
  lastWeekRankings?: PlayerRankings;
  teams: Array<Team>;
  hideSpoilers?: boolean;
}) {
  const { thisWeekRankings, lastWeekRankings, teams, hideSpoilers } = props;

  return (
    <>
      {/* <h1>Original Tribes</h1>
      <div className="tribes-flex-container">
        {...Object.entries(tribeGroups).map(([tribe, tribePlayers], i) => (
          <div key={i} className="tribe-container">
            <div style={styles.tribeDetailsContainer}>
              <div style={styles.tribeName}>{tribe}</div>
              <div
                style={{
                  ...styles.tribeColorIndicator,
                  backgroundColor: tribeColors[tribe as PlayerTribes],
                }}
              ></div>
            </div>
            <div className="tribe-members-flex-container">
              {...tribePlayers.map((player) => {
                const thisWeekScore = (thisWeekRankings || []).find(
                  (p) => p.player === player,
                );

                const isActive =
                  thisWeekScore &&
                  ["active", "winner"].includes(thisWeekScore.status);

                return (
                  <img
                    key={player.key}
                    src={
                      hideSpoilers
                        ? "mystery-man.png"
                        : `${player.key.toLowerCase()}.jpg`
                    }
                    alt={player.name}
                    width={72}
                    height={72}
                    className={isActive || hideSpoilers ? "" : "eliminated"}
                  ></img>
                );
              })}
            </div>
          </div>
        ))}
      </div> */}

      <h1>Players</h1>
      <div
        className="flex flex-wrap items-center justify-center flex-item-card"
        style={styles.legend}
      >
        {...Object.keys(PointStringMap).map((key) => (
          <div key={key}>
            <img src={`${key}.svg`} style={{ margin: "auto" }}></img>
            {PointStringMap[key]}
          </div>
        ))}
      </div>

      <div
        className="flex flex-wrap items-center justify-center"
        style={styles.playersGroup}
      >
        {...(thisWeekRankings || []).map((score) => {
          return (
            <PlayerCard
              key={score.player.key}
              score={score}
              lastWeekRankings={lastWeekRankings}
              teams={teams}
              hideSpoilers={hideSpoilers}
            ></PlayerCard>
          );
        })}
      </div>
    </>
  );
}
