import { PlayerKeys, RuleSet, StandardPoints, UpsideDownPoints } from "./types";

export const airDates = [
  "Sept 23",
  "Sept 30",
  "Oct 7",
  "Oct 14",
  "Oct 21",
  "Oct 28",
  "Nov 4",
  "Nov 11",
  "Nov 18",
  "Nov 25",
  "Dec 2",
  "Dec 9",
  "Dec 16",
];

type WeeklyPoints = {
  [RuleSet.STANDARD]?: Partial<StandardPoints>;
  [RuleSet.UPSIDE_DOWN]?: Partial<UpsideDownPoints>;
};

interface Week extends Partial<Record<PlayerKeys, WeeklyPoints>> {
  eliminated?: Array<PlayerKeys>;
  jury?: Array<PlayerKeys>;
}

const {
  AALIYAH,
  ALEXIS,
  AN,
  ANA,
  JELLY,
  BRADY,
  CARTER,
  CRISTIAN,
  KILBY,
  DEVIN,
  ERIC,
  JENNA,
  KRISTIN,
  LEWIS,
  LINNEA,
  MAGGIE,
  MIKE,
  ORI,
  PATT,
  ROB,
  SHARONDA,
} = PlayerKeys;

export const weeks: Array<Week> = [{}];
