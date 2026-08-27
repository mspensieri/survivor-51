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
    captain: {
      ids: ["kara"],
    },
    name: "Uncle Jeff & The Numbers",
    players: [ERIC, JELLY, BRADY, KILBY, LINNEA, MAGGIE, SHARONDA],
    winner: ERIC,
    swap: {
      playerIn: DEVIN,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["joanne"],
    },
    name: "TEAM JO",
    players: [LINNEA, ORI, JELLY, AN, JENNA, MAGGIE, KILBY, LEWIS],
    winner: LINNEA,
    swap: {
      playerIn: ERIC,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["spen"],
    },
    name: "Come On In Guys",
    players: [AN, DEVIN, KILBY, LINNEA, JELLY, ERIC, ALEXIS, ROB],
    winner: AN,
  },
  {
    captain: {
      ids: ["andrea_d", "susan"],
    },
    name: "The Dils",
    players: [JELLY, BRADY, KRISTIN, ALEXIS, ERIC, AN, LINNEA],
    winner: ERIC,
    swap: {
      playerIn: SHARONDA,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["diego"],
    },
    name: "Operation Italy",
    players: [ORI, ROB, JELLY, CARTER, ANA, LINNEA, LEWIS, ERIC],
    winner: ERIC,
  },
  {
    captain: {
      ids: ["elizabeth"],
    },
    name: "Play Your Idol",
    players: [JENNA, JELLY, BRADY, DEVIN, AN, ALEXIS],
    winner: JENNA,
    swap: {
      playerIn: ERIC,
      playerOut: JENNA,
      week: 2,
    },
  },
  {
    captain: {
      ids: ["mikey"],
    },
    name: "Fiftieth Time in Fiji",
    players: [KILBY, AALIYAH, BRADY, SHARONDA, MIKE, ROB, AN, ANA],
    winner: SHARONDA,
    swap: {
      playerIn: CRISTIAN,
      playerOut: MIKE,
      week: 4,
    },
  },
  {
    captain: {
      ids: ["alec"],
    },
    name: "The Ghost of Andy",
    players: [ANA, ORI, LEWIS, ALEXIS, BRADY, KILBY, DEVIN, JELLY],
    winner: KILBY,
  },
  {
    captain: {
      ids: ["leila"],
    },
    name: "Got Nothin' For Ya",
    players: [SHARONDA, MIKE, ORI, LINNEA, BRADY, CARTER, MAGGIE, ROB],
    winner: ORI,
    swap: {
      playerIn: KILBY,
      playerOut: MAGGIE,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["katie"],
    },
    name: "Truth Kamikazee",
    players: [LINNEA, ERIC, AN, CARTER, ROB, LEWIS, ANA, SHARONDA],
    winner: ROB,
    swap: {
      playerIn: BRADY,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["danny"],
    },
    name: "chud",
    players: [LINNEA, ERIC, AN, BRADY, LEWIS, KRISTIN, DEVIN, ALEXIS],
    winner: ALEXIS,
    swap: {
      playerIn: JELLY,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["stanley"],
    },
    name: "UNDERDOGS",
    players: [CRISTIAN, AALIYAH, PATT, JENNA, CARTER, MIKE, MAGGIE],
    winner: MIKE,
    swap: {
      playerIn: DEVIN,
      playerOut: JENNA,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["alex"],
    },
    name: "Wendy's Chickens",
    players: [JELLY, DEVIN, AN, AALIYAH, ERIC, SHARONDA, PATT],
    winner: DEVIN,
    swap: {
      playerIn: ROB,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["sandy"],
    },
    name: "Sandy's Spynest",
    players: [ERIC, KRISTIN, LEWIS, PATT, BRADY, JENNA, SHARONDA],
    winner: ERIC,
    swap: {
      playerIn: LINNEA,
      playerOut: JENNA,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["colleen"],
    },
    name: "Put me in, CARTER",
    players: [AN, SHARONDA, CARTER, AALIYAH, KRISTIN, DEVIN, ROB, MAGGIE],
    winner: KRISTIN,
    swap: {
      playerIn: DEVIN,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["brendan"],
    },
    name: "KING OF THE JUNGLE",
    players: [ERIC, KRISTIN, LEWIS, JELLY, SHARONDA, ANA, CARTER],
    winner: KRISTIN,
  },
  {
    captain: {
      ids: ["kevin"],
    },
    name: "Survivor 50: Dimples at War",
    players: [ROB, SHARONDA, LINNEA, ERIC, AN, JELLY, MIKE],
    winner: ROB,
    swap: {
      playerIn: CRISTIAN,
      playerOut: MIKE,
      week: 2,
    },
  },
  {
    captain: {
      ids: ["carrie"],
    },
    name: "4blackcats",
    players: [KILBY, ERIC, LINNEA, MAGGIE, LEWIS, SHARONDA, AN, ANA],
    winner: KILBY,
    swap: {
      playerIn: JELLY,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["sean"],
    },
    name: "Leafs Nation",
    players: [JENNA, JELLY, AN, SHARONDA, KILBY, MIKE],
    winner: SHARONDA,
    swap: {
      playerIn: ROB,
      playerOut: JENNA,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["sarah"],
    },
    name: "Sole Survivor of Sass",
    players: [ANA, ALEXIS, BRADY, KRISTIN, LEWIS, SHARONDA, JELLY],
    winner: ALEXIS,
  },
  {
    captain: {
      ids: ["frank"],
    },
    name: "Muscle Mania - Smackdown",
    players: [LEWIS, PATT, KILBY, KRISTIN, ROB, ORI, CRISTIAN],
    winner: LEWIS,
    swap: {
      playerIn: MIKE,
      playerOut: PATT,
      week: 2,
    },
  },
  {
    captain: {
      ids: ["thomas", "ashley"],
    },
    name: "Chicken Dinner",
    players: [CRISTIAN, CARTER, ALEXIS, ANA, MIKE, KILBY, SHARONDA],
    winner: SHARONDA,
    swap: {
      playerIn: ERIC,
      playerOut: MIKE,
      week: 4,
    },
  },
  {
    captain: {
      ids: ["erick"],
    },
    name: "Fight Milk",
    players: [ERIC, CRISTIAN, KILBY, KRISTIN, LINNEA, MAGGIE, SHARONDA],
    winner: LINNEA,
    swap: {
      playerIn: BRADY,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["andrea_r"],
    },
    name: "Here For Friendship",
    players: [BRADY, MIKE, LINNEA, JELLY, PATT, JENNA, ORI],
    winner: MIKE,
    swap: {
      playerIn: SHARONDA,
      playerOut: JENNA,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["menard"],
    },
    name: "You Go Girl",
    players: [BRADY, KILBY, ALEXIS, DEVIN, AALIYAH, ANA],
    winner: KILBY,
    swap: {
      playerIn: LINNEA,
      playerOut: AALIYAH,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["leigh"],
    },
    name: "Justice for Jesse!!!",
    players: [AN, DEVIN, CRISTIAN, SHARONDA, ERIC, KILBY, LINNEA],
    winner: DEVIN,
    swap: {
      playerIn: ROB,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["elana"],
    },
    name: "Probst Malone",
    players: [JELLY, AALIYAH, LINNEA, ANA, BRADY, MAGGIE, KRISTIN, JENNA],
    winner: AALIYAH,
    swap: {
      playerIn: DEVIN,
      playerOut: AALIYAH,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["greg"],
    },
    name: "Kookoo 4 Kokoda",
    players: [AN, LINNEA, KILBY, MAGGIE, SHARONDA, ALEXIS, ERIC, ROB],
    winner: ROB,
    swap: {
      playerIn: LEWIS,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["jacob"],
    },
    name: "With You 100%",
    players: [MAGGIE, AN, LEWIS, ALEXIS, SHARONDA, ERIC],
    winner: AN,
    swap: {
      playerIn: MIKE,
      playerOut: MAGGIE,
      week: 1,
    },
  },
  {
    captain: {
      ids: ["jacklyn"],
    },
    name: "and-i'm-pissed",
    players: [ERIC, ORI, LINNEA, DEVIN, AN, ANA, LEWIS],
    winner: LINNEA,
    swap: {
      playerIn: KRISTIN,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["meagan"],
    },
    name: "Totally Oswald",
    players: [ERIC, DEVIN, ANA, AN, JELLY, SHARONDA, KRISTIN],
    winner: AN,
    swap: {
      playerIn: LEWIS,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["taylor"],
    },
    name: "Clyde's Castaways",
    players: [BRADY, JELLY, MIKE, ROB, KILBY, PATT, LINNEA],
    winner: ROB,
    swap: {
      playerIn: AN,
      playerOut: PATT,
      week: 3,
    },
  },
  {
    captain: {
      ids: ["dan", "dana"],
    },
    name: "Ducky & Boinko Forever",
    players: [LINNEA, ORI, ROB, ERIC, SHARONDA, DEVIN],
    winner: LINNEA,
  },
  {
    captain: {
      ids: ["dean"],
    },
    name: "daddw",
    players: [CARTER, KRISTIN, CRISTIAN, AALIYAH, ANA, KILBY, DEVIN],
    winner: CARTER,
    swap: {
      playerIn: ORI,
      playerOut: AALIYAH,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["jeremy"],
    },
    name: "Jere-atrics",
    players: [SHARONDA, ERIC, KILBY, AN, KRISTIN, JELLY],
    winner: SHARONDA,
    swap: {
      playerIn: ROB,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["jessie"],
    },
    name: "Outwit, Outplay, Out-Rizz",
    players: [SHARONDA, KRISTIN, BRADY, ALEXIS, ANA, LEWIS],
    winner: SHARONDA,
  },
  {
    captain: {
      ids: ["anne"],
    },
    name: "Challenge Beasts",
    players: [ANA, JELLY, ROB, KILBY, AN, ERIC, KRISTIN],
    winner: KRISTIN,
  },
  {
    captain: {
      ids: ["kathy", "fergus"],
    },
    name: "Fergus' Fortunetelling",
    players: [JENNA, ANA, ROB, KILBY, AN, MAGGIE, SHARONDA],
    winner: ROB,
    swap: {
      playerIn: ERIC,
      playerOut: JENNA,
      week: 2,
    },
  },
  {
    captain: {
      ids: ["christine", "jocelyn"],
    },
    name: "Banana Etiquette",
    players: [ALEXIS, ERIC, JELLY, DEVIN, KRISTIN, LEWIS, CARTER, KILBY],
    winner: ALEXIS,
  },
  {
    captain: {
      ids: ["jensen"],
    },
    name: "Reba Theme Song",
    players: [ORI, PATT, ROB, KILBY, MIKE, ANA, BRADY, SHARONDA],
    winner: ANA,
    swap: {
      playerIn: JELLY,
      playerOut: PATT,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["brittany", "jesse"],
    },
    name: "BJ-ISLAND",
    players: [KILBY, MIKE, ERIC, AN, ANA, LINNEA, LEWIS, BRADY],
    winner: KILBY,
    swap: {
      playerIn: ORI,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["sheldon"],
    },
    name: "Jeff Probst For President",
    players: [JENNA, ORI, ANA, ROB, SHARONDA, AN, ERIC, LINNEA],
    winner: ERIC,
    swap: {
      playerIn: AALIYAH,
      playerOut: JENNA,
      week: 2,
    },
  },
  {
    captain: {
      ids: ["roberto", "christina"],
    },
    name: "The Baras",
    players: [BRADY, ANA, LINNEA, MIKE, KRISTIN, JELLY, AN],
    winner: AN,
  },
  {
    captain: {
      ids: ["rachel"],
    },
    name: "SURVIVOR 50 EXTRAVAGANZA",
    players: [ORI, ANA, AN, LINNEA, KRISTIN, MAGGIE, SHARONDA],
    winner: ORI,
  },
  {
    captain: {
      ids: ["savannah"],
    },
    name: "Hidden Immunity Stick",
    players: [ALEXIS, BRADY, ROB, ANA, JELLY, DEVIN, AN],
    winner: ALEXIS,
    swap: {
      playerIn: KRISTIN,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["robbie"],
    },
    name: "Peff Jobst",
    players: [BRADY, ORI, JELLY, CARTER, AN, ALEXIS, ANA],
    winner: JELLY,
    swap: {
      playerIn: SHARONDA,
      playerOut: AN,
      week: 5,
    },
  },
  {
    captain: {
      ids: ["carl"],
    },
    name: "MalnuTricia",
    players: [AN, ERIC, PATT, ALEXIS, JELLY, DEVIN, ORI],
    winner: AN,
    swap: {
      playerIn: ROB,
      playerOut: AN,
      week: 5,
    },
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
