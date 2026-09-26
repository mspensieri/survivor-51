import { Player, PlayerKeys, PlayerTribes } from "./types";
const { TOKA, SAVU, EXILE } = PlayerTribes;

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.AALIYAH]: {
    key: PlayerKeys.AALIYAH,
    name: "Aaliyah",
    tribe: TOKA,
  },
  [PlayerKeys.ALEXIS]: {
    key: PlayerKeys.ALEXIS,
    name: "Alexis",
    tribe: SAVU,
  },
  [PlayerKeys.AN]: {
    key: PlayerKeys.AN,
    name: "Thien An",
    tribe: TOKA,
  },
  [PlayerKeys.ANA]: {
    key: PlayerKeys.ANA,
    name: "Ana",
    tribe: SAVU,
  },
  [PlayerKeys.JELLY]: {
    key: PlayerKeys.JELLY,
    name: "Jelly",
    tribe: TOKA,
  },
  [PlayerKeys.BRADY]: {
    key: PlayerKeys.BRADY,
    name: "Brady",
    tribe: TOKA,
  },
  [PlayerKeys.CARTER]: {
    key: PlayerKeys.CARTER,
    name: "Carter",
    tribe: SAVU,
  },
  [PlayerKeys.CRISTIAN]: {
    key: PlayerKeys.CRISTIAN,
    name: "Cristian",
    tribe: SAVU,
  },
  [PlayerKeys.KILBY]: {
    key: PlayerKeys.KILBY,
    name: "Kilby",
    tribe: TOKA,
  },
  [PlayerKeys.DEVIN]: {
    key: PlayerKeys.DEVIN,
    name: "Devin",
    tribe: TOKA,
  },
  [PlayerKeys.ERIC]: {
    key: PlayerKeys.ERIC,
    name: "Eric",
    tribe: SAVU,
  },
  [PlayerKeys.JENNA]: {
    key: PlayerKeys.JENNA,
    name: "Jenna",
    tribe: TOKA,
  },
  [PlayerKeys.KRISTIN]: {
    key: PlayerKeys.KRISTIN,
    name: "Kristin",
    tribe: SAVU,
  },
  [PlayerKeys.LEWIS]: {
    key: PlayerKeys.LEWIS,
    name: "Lewis",
    tribe: EXILE,
  },
  [PlayerKeys.LINNEA]: {
    key: PlayerKeys.LINNEA,
    name: "Linnea",
    tribe: SAVU,
  },
  [PlayerKeys.MAGGIE]: {
    key: PlayerKeys.MAGGIE,
    name: "Maggie",
    tribe: TOKA,
  },
  [PlayerKeys.MIKE]: {
    key: PlayerKeys.MIKE,
    name: "Mike",
    tribe: TOKA,
  },
  [PlayerKeys.ORI]: {
    key: PlayerKeys.ORI,
    name: "Ori",
    tribe: SAVU,
  },
  [PlayerKeys.PATT]: {
    key: PlayerKeys.PATT,
    name: "Patt",
    tribe: TOKA,
  },
  [PlayerKeys.ROB]: {
    key: PlayerKeys.ROB,
    name: "Rob",
    tribe: SAVU,
  },
  [PlayerKeys.SHARONDA]: {
    key: PlayerKeys.SHARONDA,
    name: "Sharonda",
    tribe: SAVU,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
