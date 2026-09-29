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
  BRADY,
  CARTER,
  CRISTIAN,
  DEVIN,
  ERIC,
  JELLY,
  JENNA,
  KILBY,
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

export const weeks: Array<Week> = [
  {
    eliminated: [AALIYAH],
    ALEXIS: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    AN: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    ANA: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    BRADY: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    CARTER: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    CRISTIAN: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    ERIC: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    KILBY: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    KRISTIN: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    LINNEA: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    MAGGIE: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    MIKE: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    ORI: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    PATT: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    ROB: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        idolFound: 2,
      },
    },
    SHARONDA: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
  },
];
