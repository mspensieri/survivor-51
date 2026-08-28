import { useContext } from "react";

import PlayerContext from "../context/playerContext";
import RuleSetContext from "../context/ruleSetContext";
import { TeamScore } from "../data/types";
import { captainNames, stars } from "../utils/format";
import { SWAP_DEADLINE } from "../data/teams";
import PlacementChart from "./placementChart";

const styles: Record<string, React.CSSProperties> = {
  indicatorGreen: {
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    color: "var(--red-indicator-color)",
  },
  rank: {
    fontSize: "12pt",
    padding: "2px 6px",
    borderRadius: "var(--border-radius-standard)",
    backgroundColor: "var(--component-background-color-secondary)",
  },
  placementHistory: {
    paddingTop: "8px",
    gridColumn: "span 2",
    justifySelf: "end",
    marginRight: "-4px",
  },
  rankContainer: {
    justifySelf: "center",
  },
  teamName: {
    textAlign: "center",
    justifySelf: "center",
    gridRow: "span 2",
    gridColumn: "span 2",
  },
  captain: {
    fontSize: "9pt",
    color: "var(--component-text-color-secondary)",
  },
  points: {
    textAlign: "center",
    justifySelf: "center",
  },
  playerCount: {
    fontSize: "11pt",
    gridColumn: "span 2",
    justifySelf: "start",
    alignSelf: "end",
    paddingTop: "8px",
  },
  diff: {
    justifySelf: "center",
    fontSize: "8pt",
  },
  units: {
    fontSize: "10pt",
  },
  divider: {
    borderBottom: "1px solid var(--component-text-color-secondary)",
    gridColumn: "span 4",
  },
  inactivePlayer: {
    opacity: 0.1,
  },
};

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
      style={{ display: "inline" }}
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: "inline" }}
    >
      <path
        d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default function TeamCard(props: {
  thisWeekScore: TeamScore;
  lastWeekScore: TeamScore | undefined;
  currentWeek: number;
  onClick?: (teamScore: TeamScore) => void;
  active?: boolean;
}) {
  const { thisWeekScore, lastWeekScore, currentWeek, onClick, active } = props;
  const ruleSet = useContext(RuleSetContext);
  const playerRankings = useContext(PlayerContext);

  function getScoreDiff() {
    const scoreDiff =
      thisWeekScore[ruleSet].total -
      (lastWeekScore ? lastWeekScore[ruleSet].total : 0);

    if (scoreDiff > 0) {
      return (
        <>
          <span style={styles.indicatorGreen}>
            (+
            {scoreDiff})
          </span>
        </>
      );
    } else {
      return "(-)";
    }
  }

  function getRankDiff() {
    if (lastWeekScore) {
      if (thisWeekScore[ruleSet].rank < lastWeekScore[ruleSet].rank) {
        return (
          <>
            <span style={styles.indicatorGreen}>
              (▲ {lastWeekScore[ruleSet].rank - thisWeekScore[ruleSet].rank})
            </span>
          </>
        );
      } else if (thisWeekScore[ruleSet].rank > lastWeekScore[ruleSet].rank) {
        return (
          <>
            <span style={styles.indicatorRed}>
              (▼ {thisWeekScore[ruleSet].rank - lastWeekScore[ruleSet].rank})
            </span>
          </>
        );
      } else {
        return "(-)";
      }
    } else {
      return "(-)";
    }
  }

  const { team } = thisWeekScore;
  const swapAvailable =
    (!team.swap && currentWeek < SWAP_DEADLINE) ||
    (team.swap && team.swap.week > currentWeek);

  const players = [...team.players].concat(
    team.swap && team.swap.week <= currentWeek ? [team.swap.playerIn] : [],
  );
  const activePlayers = players.filter((player) => {
    const playerScore = playerRankings[currentWeek].find(
      (r) => r.player === player,
    );

    return playerScore && !["eliminated", "jury"].includes(playerScore.status);
  }).length;

  return (
    <div
      className={`flex-item-card team-grid-container ${active ? "active" : ""}`}
      onClick={() => onClick?.(thisWeekScore)}
    >
      <div style={styles.rankContainer}>
        <span style={styles.rank}>{`#${thisWeekScore[ruleSet].rank}`}</span>
      </div>
      <div style={styles.teamName}>
        {team.name} <br />
        <span style={styles.captain}>
          {captainNames(team)} ({stars(team.history.overallRating)})
        </span>
      </div>
      <div style={styles.points}>
        {thisWeekScore[ruleSet].total}
        <span style={styles.units}>pts</span>
      </div>
      <div style={styles.diff}>{getRankDiff()}</div>
      <div style={styles.diff}>{getScoreDiff()}</div>
      <div style={styles.divider}></div>
      <div style={styles.playerCount}>
        {new Array(activePlayers).fill(undefined).map((_, i) => (
          <UserIcon key={i} />
        ))}
        {new Array(players.length - activePlayers)
          .fill(undefined)
          .map((_, i) => (
            <span key={i} style={styles.inactivePlayer}>
              <UserIcon />
            </span>
          ))}
        {swapAvailable && <SwapIcon />}
      </div>
      <div style={styles.placementHistory}>
        <PlacementChart
          team={team}
          currentWeek={currentWeek}
          simple={true}
        ></PlacementChart>
      </div>
    </div>
  );
}
