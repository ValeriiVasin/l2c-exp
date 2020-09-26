import { BoostGroup, BoostId } from './constants';
import { images } from './images';

export interface Boost {
  group: BoostGroup;
  exp: number;
  sp: number;
  name: string;
  image: string;
  id: BoostId;
}

const TDB_IMAGE = 'https://via.placeholder.com/32x32';

// https://4gameforum.com/threads/656919/
export const boosts: Boost[] = [
  {
    group: BoostGroup.A,
    exp: 3,
    sp: 0,
    name: 'Удача Клана - Ур.1',
    image: images.clanFortune,
    id: BoostId.ClanFortuneOne,
  },
  {
    group: BoostGroup.A,
    exp: 6,
    sp: 0,
    name: 'Удача Клана - Ур.2',
    image: images.clanFortune,
    id: BoostId.ClanFortuneTwo,
  },
  {
    group: BoostGroup.A,
    exp: 10,
    sp: 0,
    name: 'Удача Клана - Ур.3',
    image: images.clanFortune,
    id: BoostId.ClanFortuneThree,
  },

  {
    group: BoostGroup.B,
    exp: 3,
    sp: 3,
    name: 'Единство Клана - Ур.1',
    image: images.clanUnity1,
    id: BoostId.ClanUnityOne,
  },

  {
    group: BoostGroup.B,
    exp: 5,
    sp: 5,
    name: 'Единство Клана - Ур.2',
    image: images.clanUnity2,
    id: BoostId.ClanUnityTwo,
  },
  {
    group: BoostGroup.B,
    exp: 7,
    sp: 7,
    name: 'Единство Клана - Ур.3',
    image: images.clanUnity3,
    id: BoostId.ClanUnityThree,
  },
  {
    group: BoostGroup.B,
    exp: 10,
    sp: 10,
    name: 'Единство Клана - Ур.4',
    image: images.clanUnity4,
    id: BoostId.ClanUnityFour,
  },

  {
    group: BoostGroup.C,
    exp: 100,
    sp: 100,
    name: 'Руна Опыта - 100% (2 часа)',
    image: images.rune1,
    id: BoostId.RuneOne,
  },

  {
    group: BoostGroup.D,
    exp: 50,
    sp: 50,
    name: 'Руна Опыта и SP 50%',
    image: images.rune1,
    id: BoostId.RuneTwo,
  },

  {
    group: BoostGroup.E,
    exp: 50,
    sp: 50,
    name: 'Песочные Часы Ирен',
    image: images.iren,
    id: BoostId.Iren,
  },

  {
    group: BoostGroup.F,
    exp: 10,
    sp: 10,
    name: 'Рыбное Рагу - Благодарность Гильдии',
    image: images.ragu,
    id: BoostId.Ragu,
  },
  {
    group: BoostGroup.F,
    exp: 100,
    sp: 100,
    name: 'Счастливый Мяч Данди',
    image: images.dandy,
    id: BoostId.Dandy,
  },

  {
    group: BoostGroup.G,
    exp: 20,
    sp: 20,
    name: 'Благословение Кота-Ангела / Энергия Кота-Ангела',
    image: images.cat,
    id: BoostId.Cat,
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Свиток Благословения Сторожевой Башни',
    image: images.tower,
    id: BoostId.Tower,
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Благословение Матрешки',
    image: images.matryoshka,
    id: BoostId.Matryoshka,
  },

  {
    group: BoostGroup.H,
    exp: 30,
    sp: 30,
    name: 'Свиток Опыта/SP - Обычный',
    image: images.scroll,
    id: BoostId.Scroll,
  },
  {
    group: BoostGroup.H,
    exp: 40,
    sp: 40,
    name: 'Свиток Опыта/SP - Среднее Качество',
    image: images.scrollMedium,
    id: BoostId.ScrollMedium,
  },
  {
    group: BoostGroup.H,
    exp: 100,
    sp: 100,
    name: 'Свиток Опыта/SP - Высокое Качество',
    image: images.scrollHigh,
    id: BoostId.ScrollHigh,
  },
  {
    group: BoostGroup.H,
    exp: 35,
    sp: 35,
    name: 'Свиток Опыта/SP Замка - Обычный',
    image: images.scrollCastle,
    id: BoostId.ScrollCastle,
  },
  {
    group: BoostGroup.H,
    exp: 45,
    sp: 45,
    name: 'Свиток Опыта/SP Замка - Среднего качества',
    image: images.scrollCastleMedium,
    id: BoostId.ScrollCastleMedium,
  },

  {
    group: BoostGroup.I,
    exp: 20,
    sp: 20,
    name: 'Свиток Опыта/SP (Олимпиада)',
    image: images.scrollOly,
    id: BoostId.ScrollOly,
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Шторма',
    image: images.storm,
    id: BoostId.Storm,
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Сильного Шторма',
    image: images.storm,
    id: BoostId.StormHeavy,
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Роста Спасителя',
    image: images.savior,
    id: BoostId.Savior,
  },

  {
    group: BoostGroup.J,
    exp: 20,
    sp: 20,
    name: 'Рисовый Пирожок Боевого Духа',
    image: images.pie,
    id: BoostId.Pie,
  },
  {
    group: BoostGroup.J,
    exp: 30,
    sp: 30,
    name: 'Рисовый Пирожок Пылающего Боевого Духа',
    image: images.pieHigh,
    id: BoostId.PieHigh,
  },

  {
    group: BoostGroup.K,
    exp: 5,
    sp: 5,
    name: 'Особый Плод Пирата',
    image: images.pirate,
    id: BoostId.Pirate,
  },
  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Дракона',
    image: images.dragon,
    id: BoostId.Dragon,
  },

  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Героя Олимпиады',
    image: images.olyHero,
    id: BoostId.OlyHero,
  },

  {
    group: BoostGroup.L,
    exp: 50,
    sp: 50,
    name: 'Слезы Золотой Русалки',
    image: images.tears,
    id: BoostId.Tears,
  },

  {
    group: BoostGroup.M,
    exp: 5,
    sp: 5,
    name: 'Всепоглощающая Сила Праздничной Шляпы',
    image: images.hat,
    id: BoostId.Hat,
  },

  {
    group: BoostGroup.N,
    exp: 3,
    sp: 3,
    name: 'Благословение Света',
    image: images.blessLight,
    id: BoostId.BlessingLight,
  },

  {
    group: BoostGroup.O,
    exp: 10,
    sp: 10,
    name: 'Руна Опыта Завсегдатая',
    image: images.runeFrequenter,
    id: BoostId.RuneFrequenter,
  },

  {
    group: BoostGroup.P,
    exp: 20,
    sp: 20,
    name: 'Амулет Опыта Героя',
    image: images.amuletHero,
    id: BoostId.AmuletHero,
  },

  {
    group: BoostGroup.Q,
    exp: 5,
    sp: 5,
    name: 'Изобилие Клана - Ур.1',
    image: images.clanExuberance,
    id: BoostId.ClanExuberanceOne,
  },
  {
    group: BoostGroup.Q,
    exp: 8,
    sp: 8,
    name: 'Изобилие Клана - Ур.2',
    image: images.clanExuberance,
    id: BoostId.ClanExuberanceTwo,
  },
  {
    group: BoostGroup.Q,
    exp: 11,
    sp: 11,
    name: 'Изобилие Клана - Ур.3',
    image: images.clanExuberance,
    id: BoostId.ClanExuberanceThree,
  },
  {
    group: BoostGroup.Q,
    exp: 15,
    sp: 15,
    name: 'Изобилие Клана - Ур.4',
    image: images.clanExuberance,
    id: BoostId.ClanExuberanceFour,
  },
];

export const groups = Object.keys(BoostGroup);

interface BoostByGroup {
  [key: string]: Boost[];
}

export const byGroup: BoostByGroup = boosts.reduce((acc, boost) => {
  const group: BoostGroup = boost.group;

  if (!acc[group]) {
    acc[group] = [];
  }

  acc[group] = [...acc[group], boost];
  return acc;
}, {} as BoostByGroup);

interface BoostById {
  [key: string]: Boost;
}

export const byId: BoostById = boosts.reduce((acc, boost) => {
  acc[boost.id] = boost;
  return acc;
}, {} as BoostById);
