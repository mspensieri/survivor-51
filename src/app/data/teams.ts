import { PLAYERS } from "./players";
import { Team } from "./types";
import { computeHistory } from "./history";

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
  SHARONDA,
  JENNA,
  KRISTIN,
  LEWIS,
  LINNEA,
  MAGGIE,
  MIKE,
  ORI,
  PATT,
  ROB,
} = PLAYERS;

export const SWAP_DEADLINE = 5;

export const teams: Array<Team> = computeHistory([
  {
    name: "Wendy's Chickens",
    captain: {
      ids: ["alex"],
    },
    winner: CRISTIAN,
    players: [ANA, CARTER, CRISTIAN, KILBY, JELLY, ORI],
  },
  {
    name: "4blackcats",
    captain: {
      ids: ["carrie"],
    },
    winner: LINNEA,
    players: [ALEXIS, LEWIS, LINNEA, MIKE, PATT, ORI],
  },
  {
    name: "SURVIVOR EXTRAVAGANZA 51",
    captain: {
      ids: ["rachel"],
    },
    winner: KILBY,
    players: [AALIYAH, BRADY, KILBY, KRISTIN, LINNEA, ORI],
  },
  {
    name: "Shelderadooo",
    captain: {
      ids: ["sheldon"],
    },
    winner: SHARONDA,
    players: [BRADY, CARTER, JELLY, JENNA, KILBY, SHARONDA],
  },
  {
    name: "Wilson",
    captain: {
      ids: ["emmanuel"],
    },
    winner: JELLY,
    players: [ALEXIS, BRADY, CARTER, CRISTIAN, JELLY, PATT],
  },
  {
    name: "Blindside Baddies",
    captain: {
      ids: ["sophie"],
    },
    winner: SHARONDA,
    players: [ANA, CARTER, CRISTIAN, JELLY, ROB, SHARONDA],
  },
  {
    name: "Jeff's Dimples",
    captain: {
      ids: ["kevin"],
    },
    winner: PATT,
    players: [JELLY, LEWIS, LINNEA, MIKE, PATT, ORI],
  },
  {
    name: "Come on in, GIRLS",
    captain: {
      ids: ["kara"],
    },
    winner: ALEXIS,
    players: [AALIYAH, ALEXIS, JELLY, KRISTIN, LINNEA, MAGGIE],
  },
  {
    name: "Fight Milk",
    captain: {
      ids: ["erick"],
    },
    winner: CARTER,
    players: [CARTER, LINNEA, SHARONDA, ALEXIS, PATT, MIKE],
  },
  {
    name: "Please Do Well",
    captain: {
      ids: ["mikey"],
    },
    winner: ALEXIS,
    players: [ALEXIS, CARTER, ANA, ERIC, ORI, PATT],
  },
  {
    name: "Come on in Guys",
    captain: {
      ids: ["spen"],
    },
    winner: LINNEA,
    players: [JENNA, LINNEA, AN, SHARONDA, MIKE, ORI],
  },
  {
    name: "Play Your Billie Eilish Boomerang Idol",
    captain: {
      ids: ["elizabeth"],
    },
    winner: SHARONDA,
    players: [ORI, AN, SHARONDA, LINNEA, ERIC, PATT],
  },
  {
    name: "Banana Etiquette",
    captain: {
      ids: ["christine", "jocelyn"],
    },
    winner: JELLY,
    players: [AN, JELLY, KILBY, ERIC, JENNA, ORI],
  },
  {
    name: "Outwit, Outplay, Out-Rizz",
    captain: {
      ids: ["jessie"],
    },
    winner: CARTER,
    players: [AALIYAH, BRADY, CARTER, DEVIN, JENNA, LINNEA],
  },
  {
    name: "Fergus' Fortunetelling",
    captain: {
      ids: ["kathy", "fergus"],
    },
    winner: ORI,
    players: [ALEXIS, JELLY, BRADY, KILBY, MIKE, ORI],
  },
  {
    name: "Leafs Nation",
    captain: {
      ids: ["sean"],
    },
    winner: LEWIS,
    players: [JENNA, LEWIS, LINNEA, ROB, AN, ALEXIS],
  },
  {
    name: "Sole Survivor of Sass",
    captain: {
      ids: ["sarah"],
    },
    winner: ERIC,
    players: [ERIC, LINNEA, CARTER, JENNA, ALEXIS, MIKE],
  },
  {
    name: "Sandy's Spynest",
    captain: {
      ids: ["sandy"],
    },
    winner: SHARONDA,
    players: [MIKE, ROB, SHARONDA, JELLY, ERIC, BRADY],
  },
  {
    name: "Here for friendship",
    captain: {
      ids: ["andrea_r"],
    },
    winner: ALEXIS,
    players: [BRADY, CARTER, ALEXIS, ANA, AALIYAH, CRISTIAN],
  },
  {
    name: "chud",
    captain: {
      ids: ["danny"],
    },
    winner: ALEXIS,
    players: [SHARONDA, LINNEA, ORI, MIKE, DEVIN, ALEXIS],
  },
  {
    name: "Truth Kamikazee",
    captain: {
      ids: ["katie"],
    },
    winner: JELLY,
    players: [MIKE, JELLY, ALEXIS, ERIC, DEVIN, BRADY],
  },
  {
    name: "UNDERDOGS",
    captain: {
      ids: ["stanley"],
    },
    winner: JELLY,
    players: [],
  },
]);

export const fakeTeams: Array<Team> = [
  {
    name: "1",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [AALIYAH, ALEXIS, AN, ANA, JELLY, BRADY, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "2",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA, JENNA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "3",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JENNA, KRISTIN, LEWIS, LINNEA, MAGGIE, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "4",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA, JENNA, KRISTIN],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "5",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [LEWIS, LINNEA, MAGGIE, CARTER, CRISTIAN, KILBY, DEVIN, ERIC],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "6",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JELLY, BRADY, CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "7",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [DEVIN, ERIC, SHARONDA, JENNA, KRISTIN, LEWIS, LINNEA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "8",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [KRISTIN, LEWIS, LINNEA, MAGGIE, CARTER, CRISTIAN, KILBY, DEVIN],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "9",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JELLY, BRADY, CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "10",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [ERIC, SHARONDA, JENNA, KRISTIN, LEWIS, LINNEA, MAGGIE],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "11",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [LINNEA, MAGGIE, CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "12",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JELLY, BRADY, ERIC, SHARONDA, JENNA, KRISTIN, LEWIS],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "13",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [KRISTIN, LEWIS, LINNEA, MAGGIE, CARTER, DEVIN, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "14",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [CRISTIAN, KILBY, ERIC, SHARONDA, JENNA, MAGGIE, BRADY],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "15",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JELLY, BRADY, KRISTIN, LEWIS, LINNEA, MAGGIE, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "16",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA, JENNA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "17",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JENNA, KRISTIN, LEWIS, LINNEA, MAGGIE, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
  {
    name: "18",
    captain: {
      ids: ["alex"],
    },
    winner: AALIYAH,
    players: [JELLY, BRADY, CARTER, CRISTIAN, KILBY, DEVIN, ERIC, SHARONDA],
    history: {
      overallRating: 1,
      placements: [],
    },
  },
];
