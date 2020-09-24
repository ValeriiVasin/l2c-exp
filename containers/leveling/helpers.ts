interface LevelsConfig {
  [level: string]: number;
}

// https://l2central.info/classic/Уровень_персонажа
const LEVELS_CONFIG: LevelsConfig = {
  1: 0,
  2: 68,
  3: 364,
  4: 1169,
  5: 2885,
  6: 6039,
  7: 11288,
  8: 19424,
  9: 31379,
  10: 48230,
  11: 71203,
  12: 101678,
  13: 141194,
  14: 191455,
  15: 254331,
  16: 331868,
  17: 426289,
  18: 540001,
  19: 675597,
  20: 835864,
  21: 1023785,
  22: 1439215,
  23: 1948497,
  24: 2568850,
  25: 3320625,
  26: 4227172,
  27: 5315161,
  28: 6614929,
  29: 8161929,
  30: 9995812,
  31: 12162655,
  32: 14713777,
  33: 17708475,
  34: 21213445,
  35: 25304463,
  36: 30067485,
  37: 35599858,
  38: 42010312,
  39: 49421366,
  40: 57972427,
  41: 67818553,
  42: 79135431,
  43: 92117896,
  44: 106985763,
  45: 123986756,
  46: 143394645,
  47: 165516618,
  48: 190696911,
  49: 219317613,
  50: 251805374,
  51: 288635909,
  52: 330338848,
  53: 377507026,
  54: 430790086,
  55: 490916803,
  56: 558693890,
  57: 635018116,
  58: 720879370,
  59: 817380319,
  60: 925741335,
  61: 1047311009,
  62: 1183577349,
  63: 1336187067,
  64: 1506967658,
  65: 1697936136,
  66: 1911306680,
  67: 2149533465,
  68: 2415323168,
  69: 2711646440,
  70: 3041801165,
  71: 3409398455,
  72: 3818421441,
  73: 4273257148,
  74: 4778730308,
  75: 5340152664,
  76: 5963335189,
  77: 7138805250,
  78: 9372198366,
  79: 16072377713,
  80: 38406308871,
  81: 150075964661,
  82: 279783329566,
  83: 454748284485,
  84: 673468617187,
  85: 1_548_349_947_995,
  86: 5_922_756_602_035,
  87: 12_484_366_583_095,
  88: 22_982_942_552_791,
  89: 35_581_233_716_426,
  90: 50_699_183_112_788,
};

function getExpValue(level: number): number {
  const levelReached = Math.floor(level);
  const moreThanLevel = level - levelReached;

  const expForLevel = LEVELS_CONFIG[levelReached];

  if (moreThanLevel === 0) {
    return expForLevel;
  }

  const extraExp = Math.round(
    (LEVELS_CONFIG[levelReached + 1] - expForLevel) * moreThanLevel
  );

  return expForLevel + extraExp;
}

export function getExp({ from, to }: { from: number; to: number }): number {
  return getExpValue(to) - getExpValue(from);
}

export const formatTime = (minutes: number): string => {
  if (minutes < 1) {
    return 'меньше минуты';
  }

  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);

  if (hours === 0) {
    return `${mins}мин`;
  }

  if (mins === 0) {
    return `${hours}ч`;
  }

  return `${hours}ч ${mins}мин`;
};
