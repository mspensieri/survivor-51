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

export const weeks: Array<Week> = [
  {
    eliminated: [JENNA, MAGGIE],
    [AALIYAH]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [AN]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [ANA]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        idolFound: 2,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [MAGGIE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [PATT]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { votes: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [],
    [AALIYAH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [AN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        idolFound: 2,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        survival: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        teamImmunity: 1,
        survival: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [PATT]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [PATT],
    [AALIYAH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [AN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [PATT]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [MIKE],
    [AALIYAH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [AN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
        idolFound: 2,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [MIKE]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
  },
  {
    eliminated: [AALIYAH, AN],
    [AALIYAH]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [AN]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        teamImmunity: 1,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, teamImmunity: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    eliminated: [ERIC, LINNEA, CRISTIAN],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CRISTIAN]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ERIC]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [LINNEA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
  },
  {
    jury: [KILBY],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [KILBY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 2,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, individualImmunity: 2 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [CARTER, ANA],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ANA]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [CARTER]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        placement: 2,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, individualImmunity: 2 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [JELLY],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [JELLY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 2,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, individualImmunity: 2 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, advantage: 1, idolFound: 2 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [DEVIN, ORI],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [DEVIN]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
        individualImmunity: 2,
      },
    },
    [ORI]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, voteNullified: 2 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
      },
    },
  },
  {
    jury: [BRADY, ROB],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [BRADY]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 2,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 2, individualImmunity: 2 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
    [ROB]: {
      [RuleSet.STANDARD]: { survival: 1, placement: 2 },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 2,
      },
    },
  },
  {
    jury: [SHARONDA],
    eliminated: [KRISTIN, LEWIS],
    [ALEXIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
        placement: 10,
      },
    },
    [KRISTIN]: {
      [RuleSet.STANDARD]: { survival: 1, votes: 1, placement: 7 },
    },
    [LEWIS]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        individualImmunity: 2,
        votes: 1,
        fire: 1,
        placement: 8,
      },
    },
    [SHARONDA]: {
      [RuleSet.STANDARD]: {
        survival: 1,
        votes: 1,
        placement: 5,
      },
    },
  },
];
