import { Player, PlayerKeys, PlayerTribes } from "./types";
const { VATU, CILA, KALO } = PlayerTribes;

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.AALIYAH]: {
    key: PlayerKeys.AALIYAH,
    name: "Aaliyah",
    tribe: VATU,
    history: "Season 37",
  },
  [PlayerKeys.ALEXIS]: {
    key: PlayerKeys.ALEXIS,
    name: "Alexis",
    tribe: VATU,
    history: "Seasons 32, 34, 38",
  },
  [PlayerKeys.AN]: {
    key: PlayerKeys.AN,
    name: "Thien An",
    tribe: KALO,
    history: "Season 46",
  },
  [PlayerKeys.ANA]: {
    key: PlayerKeys.ANA,
    name: "Ana",
    tribe: KALO,
    history: "Season 35",
  },
  [PlayerKeys.JELLY]: {
    key: PlayerKeys.JELLY,
    name: "Jelly",
    tribe: CILA,
    history: "Season 37",
  },
  [PlayerKeys.BRADY]: {
    key: PlayerKeys.BRADY,
    name: "Brady",
    tribe: CILA,
    history: "Seasons 12, 16, 20, 34",
  },
  [PlayerKeys.CARTER]: {
    key: PlayerKeys.CARTER,
    name: "Carter",
    tribe: KALO,
    history: "Seasons 18, 20, 23",
  },
  [PlayerKeys.CRISTIAN]: {
    key: PlayerKeys.CRISTIAN,
    name: "Cristian",
    tribe: VATU,
    history: "Seasons 2, 8, 20",
  },
  [PlayerKeys.KILBY]: {
    key: PlayerKeys.KILBY,
    name: "Kilby",
    tribe: KALO,
    history: "Season 45",
  },
  [PlayerKeys.DEVIN]: {
    key: PlayerKeys.DEVIN,
    name: "Devin",
    tribe: CILA,
    history: "Season 45",
  },
  [PlayerKeys.ERIC]: {
    key: PlayerKeys.ERIC,
    name: "Eric",
    tribe: VATU,
    history: "Season 47",
  },
  [PlayerKeys.SHARONDA]: {
    key: PlayerKeys.SHARONDA,
    name: "Sharonda",
    tribe: VATU,
    history: "Season 49",
  },
  [PlayerKeys.JENNA]: {
    key: PlayerKeys.JENNA,
    name: "Jenna",
    tribe: CILA,
    history: "Seasons 1, 8",
  },
  [PlayerKeys.SAVANNAH]: {
    key: PlayerKeys.SAVANNAH,
    name: "Savannah",
    tribe: CILA,
    history: "Season 49",
  },
  [PlayerKeys.KRISTIN]: {
    key: PlayerKeys.KRISTIN,
    name: "Kristin",
    tribe: CILA,
    history: "Season 48",
  },
  [PlayerKeys.LEWIS]: {
    key: PlayerKeys.LEWIS,
    name: "Lewis",
    tribe: KALO,
    history: "Season 42",
  },
  [PlayerKeys.LINNEA]: {
    key: PlayerKeys.LINNEA,
    name: "Linnea",
    tribe: KALO,
    history: "Season 48",
  },
  [PlayerKeys.MAGGIE]: {
    key: PlayerKeys.MAGGIE,
    name: "Maggie",
    tribe: VATU,
    history: "Season 48",
  },
  [PlayerKeys.MIKE]: {
    key: PlayerKeys.MIKE,
    name: "Mike",
    tribe: KALO,
    history: "Season 37",
  },
  [PlayerKeys.ORI]: {
    key: PlayerKeys.ORI,
    name: "Ori",
    tribe: CILA,
    history: "Seasons 13, 16, 23, 34",
  },
  [PlayerKeys.PATT]: {
    key: PlayerKeys.PATT,
    name: "Patt",
    tribe: VATU,
    history: "Season 46",
  },
  [PlayerKeys.ROB]: {
    key: PlayerKeys.ROB,
    name: "Rob",
    tribe: CILA,
    history: "Season 38",
  },
  [PlayerKeys.STEPHENIE]: {
    key: PlayerKeys.STEPHENIE,
    name: "Stephenie",
    tribe: VATU,
    history: "Seasons 10, 11, 20",
  },
  [PlayerKeys.TIFFANY]: {
    key: PlayerKeys.TIFFANY,
    name: "Tiffany",
    tribe: KALO,
    history: "Season 46",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
