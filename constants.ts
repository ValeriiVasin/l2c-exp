export enum BoostGroup {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
  H = 'H',
  I = 'I',
  J = 'J',
  K = 'K',
  L = 'L',
  M = 'M',
  N = 'N',
  O = 'O',
  P = 'P',
  Q = 'Q'
}

export enum BoostId {
  FortuneOne = 'fortune1',
  FortuneTwo = 'fortune2',
  FortuneThree = 'fortune3',
  UnityOne = 'unity1',
  UnityTwo = 'unity2',
  UnityThree = 'unity3',
  UnityFour = 'unity4',
  RuneOne = 'rune100',
  RuneTwo = 'rune50',
  Iren = 'iren',
  Ragu = 'ragu',
  Dandy = 'dandy',
  Cat = 'cat',
  Tower = 'tower',
  Matryoshka = 'matryoshka',
  Scroll = 'scroll',
  ScrollMedium = 'scroll-medium',
  ScrollHigh = 'scroll-high',
  ScrollCastle = 'scroll-castle',
  ScrollCastleMedium = 'scroll-castle-medium',
  ScrollOly = 'scroll-oly',
  Storm = 'storm',
  StormHeavy = 'storm-heavy',
  Savior = 'savior',
  Pie = 'pie',
  PieHigh = 'pie-high',
  Pirate = 'pirate',
  Dragon = 'dragon',
  OlyHero = 'oly-hero',
  Tears = 'tears',
  Hat = 'hat',
  BlessingLight = 'blessing-light',
  RuneFrequenter = 'rune-frequenter',
  AmuletHero = 'amulet-hero',
  ClanExuberanceOne = 'clan-exuberance-one',
  ClanExuberanceTwo = 'clan-exuberance-two',
  ClanExuberanceThree = 'clan-exuberance-three',
  ClanExuberanceFour = 'clan-exuberance-four'
}

export interface AppState {
  boosts: Array<BoostId>;
  exp: {
    value: string;
    exp: number;
    rawExp: number;
  };
}
