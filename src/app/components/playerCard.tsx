import { useContext } from "react";
import { PlayerScore, Team } from "../data/types";
import { PlayerRankings } from "../providers/types";
import { tribeColors } from "../utils/colors";
import RuleSetContext from "../context/ruleSetContext";
import { Badge } from "react-bootstrap";
import { PointStringMap } from "../utils/format";

const styles: Record<string, React.CSSProperties> = {
  badgeContainer: { width: "100%", marginTop: "10px" },
  badge: {
    width: "100%",
    lineHeight: "inherit",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  indicatorGreen: {
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    color: "var(--red-indicator-color)",
  },
  smallText: {
    fontSize: "10pt",
  },
  notQuiteTinyText: { fontSize: "9pt" },
  tinyText: {
    fontSize: "8pt",
  },
  playerCard: {
    maxWidth: "350px",
    border: "none",
  },
  playerCardHeader: {
    gridTemplateRows: "25px 15px",
    gridTemplateColumns: "44px auto 44px",
    marginBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderTopLeftRadius: "var(--border-radius-standard)",
    borderTopRightRadius: "var(--border-radius-standard)",
  },
  rank: {
    fontSize: "12pt",
    padding: "0px 6px",
    borderRadius: "var(--border-radius-standard)",
    backgroundColor: "var(--component-background-color-secondary)",
  },
  playerName: {
    fontSize: "14pt",
    textAlign: "center",
    justifySelf: "center",
    alignSelf: "center",
  },
  playerCardBody: {
    marginBottom: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  avatarImg: { borderRadius: "var(--border-radius-rounded)" },
  tableContainer: {
    marginBottom: "0px",
    paddingLeft: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  table: {
    marginBottom: "0px",
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  tableHeader: {
    height: "25px",
  },
  tableBody: { verticalAlign: "bottom", height: "25px" },
};

export default function PlayerCard(props: {
  score: PlayerScore;
  teams: Array<Team>;
  lastWeekRankings?: PlayerRankings;
  hideSpoilers?: boolean;
}) {
  const { score, lastWeekRankings, teams, hideSpoilers } = props;
  const { player } = score;
  const lastWeekScore = lastWeekRankings?.find(
    (p) => p.player === score.player,
  );
  const ruleSet = useContext(RuleSetContext);

  const popularity = teams.reduce((acc, curr) => {
    return curr.players.includes(player) ? acc + 1 : acc;
  }, 0);

  function getBadge(playerScore: PlayerScore) {
    if (playerScore.status === "eliminated") {
      return (
        <Badge bg="danger" style={styles.badge}>
          Eliminated
        </Badge>
      );
    } else if (playerScore.status === "jury") {
      return (
        <Badge bg="info" style={styles.badge}>
          Jury
        </Badge>
      );
    } else if (playerScore.status === "winner") {
      return (
        <Badge bg="success" style={styles.badge}>
          Winner
        </Badge>
      );
    } else {
      return (
        <Badge bg="secondary" style={styles.badge}>
          Active
        </Badge>
      );
    }
  }

  function getRankDiff(rank: number, lastRank: number = 0) {
    if (lastRank) {
      if (rank < lastRank) {
        return (
          <>
            <span style={styles.indicatorGreen}>(▲ {lastRank - rank})</span>
          </>
        );
      } else if (rank > lastRank) {
        return (
          <>
            <span style={styles.indicatorRed}>(▼ {rank - lastRank})</span>
          </>
        );
      } else {
        return "(-)";
      }
    } else {
      return "(-)";
    }
  }

  function getScoreDiff(
    score: number,
    lastScore: number = 0,
    useBrackets: boolean = true,
  ) {
    const scoreDiff = score - lastScore;

    if (scoreDiff > 0) {
      const scoreString = useBrackets ? `(+${scoreDiff})` : `+${scoreDiff}`;

      return (
        <>
          <span style={styles.indicatorGreen}>{scoreString}</span>
        </>
      );
    } else {
      return useBrackets ? "(-)" : "-";
    }
  }

  return (
    <div key={player.name} className="flex-item-card" style={styles.playerCard}>
      <div
        className="grid"
        style={{
          ...styles.playerCardHeader,
          borderTop: `10px solid ${tribeColors[score.player.tribe]}`,
        }}
      >
        <div className="justify-self-center">
          <div style={styles.rank}>#{score[ruleSet].rank}</div>
        </div>
        <div style={styles.playerName}>{player.name}</div>

        <div className="justify-self-center self-center text-center">
          {score[ruleSet].total}
          <span style={styles.smallText}>pts</span>
        </div>
        <div className="justify-self-center" style={styles.tinyText}>
          {getRankDiff(score[ruleSet].rank, lastWeekScore?.[ruleSet].rank)}
        </div>
        <span className="justify-self-center" style={styles.tinyText}>
          {popularity} teams ({Math.floor((popularity / teams.length) * 100)}%)
        </span>
        <div className="justify-self-center" style={styles.tinyText}>
          {getScoreDiff(score[ruleSet].total, lastWeekScore?.[ruleSet].total)}
        </div>
      </div>
      <div className="flex flex-wrap" style={styles.playerCardBody}>
        <img
          src={
            hideSpoilers ? "mystery-man.png" : `${player.key.toLowerCase()}.jpg`
          }
          alt={player.name}
          width={95}
          height={95}
          style={styles.avatarImg}
        ></img>
        <div className="flex-grow" style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                {...Object.keys(PointStringMap).map((key) => (
                  <th key={key}>
                    <img src={`${key}.svg`} style={{ margin: "auto" }}></img>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={styles.tableBody}>
              <tr>
                {...Object.keys(PointStringMap).map((key) => {
                  return (
                    <td key={key} style={styles.notQuiteTinyText}>
                      {getScoreDiff(
                        (score[ruleSet] as any).points?.[key] || 0,
                        (lastWeekScore?.[ruleSet].points as any)?.[key] || 0,
                        false,
                      )}
                    </td>
                  );
                })}
              </tr>
              <tr>
                {...Object.keys(PointStringMap).map((key) => {
                  const points = score[ruleSet].points as any;
                  return (
                    <td key={key} style={styles.smallText}>
                      {points[key] || 0}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={styles.badgeContainer}>{getBadge(score)}</div>
    </div>
  );
}
