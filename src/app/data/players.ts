import { Player, PlayerKeys, PlayerTribes } from "./types";
const { VATU, CILA, KALO } = PlayerTribes;

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.AALIYAH]: {
    key: PlayerKeys.AALIYAH,
    name: "Aaliyah",
    tribe: VATU,
  },
  [PlayerKeys.ALEXIS]: {
    key: PlayerKeys.ALEXIS,
    name: "Alexis",
    tribe: VATU,
  },
  [PlayerKeys.AN]: {
    key: PlayerKeys.AN,
    name: "Thien An",
    tribe: KALO,
  },
  [PlayerKeys.ANA]: {
    key: PlayerKeys.ANA,
    name: "Ana",
    tribe: KALO,
  },
  [PlayerKeys.JELLY]: {
    key: PlayerKeys.JELLY,
    name: "Jelly",
    tribe: CILA,
  },
  [PlayerKeys.BRADY]: {
    key: PlayerKeys.BRADY,
    name: "Brady",
    tribe: CILA,
  },
  [PlayerKeys.CARTER]: {
    key: PlayerKeys.CARTER,
    name: "Carter",
    tribe: KALO,
  },
  [PlayerKeys.CRISTIAN]: {
    key: PlayerKeys.CRISTIAN,
    name: "Cristian",
    tribe: VATU,
  },
  [PlayerKeys.KILBY]: {
    key: PlayerKeys.KILBY,
    name: "Kilby",
    tribe: KALO,
  },
  [PlayerKeys.DEVIN]: {
    key: PlayerKeys.DEVIN,
    name: "Devin",
    tribe: CILA,
  },
  [PlayerKeys.ERIC]: {
    key: PlayerKeys.ERIC,
    name: "Eric",
    tribe: VATU,
  },
  [PlayerKeys.SHARONDA]: {
    key: PlayerKeys.SHARONDA,
    name: "Sharonda",
    tribe: VATU,
  },
  [PlayerKeys.JENNA]: {
    key: PlayerKeys.JENNA,
    name: "Jenna",
    tribe: CILA,
  },
  [PlayerKeys.KRISTIN]: {
    key: PlayerKeys.KRISTIN,
    name: "Kristin",
    tribe: CILA,
  },
  [PlayerKeys.LEWIS]: {
    key: PlayerKeys.LEWIS,
    name: "Lewis",
    tribe: KALO,
  },
  [PlayerKeys.LINNEA]: {
    key: PlayerKeys.LINNEA,
    name: "Linnea",
    tribe: KALO,
  },
  [PlayerKeys.MAGGIE]: {
    key: PlayerKeys.MAGGIE,
    name: "Maggie",
    tribe: VATU,
  },
  [PlayerKeys.MIKE]: {
    key: PlayerKeys.MIKE,
    name: "Mike",
    tribe: KALO,
  },
  [PlayerKeys.ORI]: {
    key: PlayerKeys.ORI,
    name: "Ori",
    tribe: CILA,
  },
  [PlayerKeys.PATT]: {
    key: PlayerKeys.PATT,
    name: "Patt",
    tribe: VATU,
  },
  [PlayerKeys.ROB]: {
    key: PlayerKeys.ROB,
    name: "Rob",
    tribe: CILA,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
