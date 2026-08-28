"use client";

import React, { useContext, useState } from "react";

import { TeamRankings } from "../providers/types";
import { TeamScore } from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import Sidebar from "./sidebar";
import TeamCard from "./teamCard";

export default function Leaderboard(props: {
  thisWeekRankings: TeamRankings;
  lastWeekRankings: TeamRankings;
  currentWeek: number;
  screenWidth: number;
}) {
  const {
    lastWeekRankings = [],
    thisWeekRankings = [],
    currentWeek,
    screenWidth,
  } = props;
  const ruleSet = useContext(RuleSetContext);

  const [selectedTeam, setSelectedTeam] = useState<TeamScore | null>(null);
  const [offcanvasShown, setOffcanvasShown] = useState(false);

  function displayTeamDetails(teamScore: TeamScore) {
    if (selectedTeam === teamScore) {
      setOffcanvasShown(!offcanvasShown);
    } else {
      setSelectedTeam(teamScore);
      setOffcanvasShown(true);
    }
  }

  let firstPlaceGroup = thisWeekRankings.filter(
    (teamScore) => teamScore[ruleSet].rank === 1,
  );

  let remainingTeams: TeamRankings;
  if (firstPlaceGroup.length > 6) {
    firstPlaceGroup = [];
    remainingTeams = thisWeekRankings;
  } else {
    remainingTeams = thisWeekRankings.filter(
      (teamScore) => teamScore[ruleSet].rank > 1,
    );
  }

  function teamFlexGroup(rankings: TeamRankings) {
    return (
      <>
        {...rankings.map((thisWeekScore, index) => {
          const lastWeekScore = lastWeekRankings?.find(
            (r) => r.team === thisWeekScore.team,
          );

          return (
            <TeamCard
              key={index}
              thisWeekScore={thisWeekScore}
              lastWeekScore={lastWeekScore}
              currentWeek={currentWeek}
              onClick={displayTeamDetails}
              active={
                selectedTeam?.team === thisWeekScore.team && offcanvasShown
              }
            ></TeamCard>
          );
        })}
      </>
    );
  }

  function sizeForSegments(segmentCount: number) {
    const segmentWidth = 350;
    const segmentMargin = 15;

    const elementWidth =
      segmentCount * segmentWidth +
      2 * segmentMargin +
      segmentMargin * (segmentCount - 1);

    if (segmentCount === 1) {
      return Math.min(screenWidth - 2 * segmentMargin, elementWidth);
    } else {
      return elementWidth;
    }
  }

  let numberOfSegments = 1;
  for (let i = 1; i <= 10; i++) {
    if (screenWidth <= sizeForSegments(i + 1)) {
      numberOfSegments = i;
      break;
    }
  }

  return (
    <>
      {firstPlaceGroup.length && (
        <div
          className="leaderboard-flex-container first-place-group"
          style={{
            maxWidth: sizeForSegments(numberOfSegments),
          }}
        >
          {teamFlexGroup(firstPlaceGroup)}
        </div>
      )}
      <div className="leaderboard-flex-container">
        {teamFlexGroup(remainingTeams)}
      </div>

      {selectedTeam && (
        <Sidebar
          shown={offcanvasShown}
          onHide={() => setOffcanvasShown(false)}
          teamScore={selectedTeam}
          currentWeek={currentWeek}
        ></Sidebar>
      )}
    </>
  );
}
