import { BoostGroup, BoostId } from './constants';

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
    image: require('./images/clan-fortune.jpg'),
    id: BoostId.ClanFortuneOne
  },
  {
    group: BoostGroup.A,
    exp: 6,
    sp: 0,
    name: 'Удача Клана - Ур.2',
    image: require('./images/clan-fortune.jpg'),
    id: BoostId.ClanFortuneTwo
  },
  {
    group: BoostGroup.A,
    exp: 10,
    sp: 0,
    name: 'Удача Клана - Ур.3',
    image: require('./images/clan-fortune.jpg'),
    id: BoostId.ClanFortuneThree
  },

  {
    group: BoostGroup.B,
    exp: 3,
    sp: 3,
    name: 'Единство Клана - Ур.1',
    image: require('./images/clan-unity-1.jpg'),
    id: BoostId.ClanUnityOne
  },

  {
    group: BoostGroup.B,
    exp: 5,
    sp: 5,
    name: 'Единство Клана - Ур.2',
    image: require('./images/clan-unity-2.jpg'),
    id: BoostId.ClanUnityTwo
  },
  {
    group: BoostGroup.B,
    exp: 7,
    sp: 7,
    name: 'Единство Клана - Ур.3',
    image: require('./images/clan-unity-3.jpg'),
    id: BoostId.ClanUnityThree
  },
  {
    group: BoostGroup.B,
    exp: 10,
    sp: 10,
    name: 'Единство Клана - Ур.4',
    image: require('./images/clan-unity-4.jpg'),
    id: BoostId.ClanUnityFour
  },

  {
    group: BoostGroup.C,
    exp: 100,
    sp: 100,
    name: 'Руна Опыта - 100% (2 часа)',
    image: require('./images/rune-one.jpg'),
    id: BoostId.RuneOne
  },

  {
    group: BoostGroup.D,
    exp: 50,
    sp: 50,
    name: 'Руна Опыта и SP 50%',
    image: require('./images/rune-one.jpg'),
    id: BoostId.RuneTwo
  },

  {
    group: BoostGroup.E,
    exp: 50,
    sp: 50,
    name: 'Песочные Часы Ирен',
    image: require('./images/iren.jpg'),
    id: BoostId.Iren
  },

  {
    group: BoostGroup.F,
    exp: 10,
    sp: 10,
    name: 'Рыбное Рагу - Благодарность Гильдии',
    image: require('./images/ragu.jpg'),
    id: BoostId.Ragu
  },
  {
    group: BoostGroup.F,
    exp: 100,
    sp: 100,
    name: 'Счастливый Мяч Данди',
    image: require('./images/dandy.jpeg'),
    id: BoostId.Dandy
  },

  {
    group: BoostGroup.G,
    exp: 20,
    sp: 20,
    name: 'Благословение Кота-Ангела / Энергия Кота-Ангела',
    image: require('./images/cat.jpg'),
    id: BoostId.Cat
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Свиток Благословения Сторожевой Башни',
    image: require('./images/tower.jpg'),
    id: BoostId.Tower
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Благословение Матрешки',
    image: require('./images/matryoshka.jpeg'),
    id: BoostId.Matryoshka
  },

  {
    group: BoostGroup.H,
    exp: 30,
    sp: 30,
    name: 'Свиток Опыта/SP - Обычный',
    image: require('./images/scroll.jpg'),
    id: BoostId.Scroll
  },
  {
    group: BoostGroup.H,
    exp: 40,
    sp: 40,
    name: 'Свиток Опыта/SP - Среднее Качество',
    image: require('./images/scroll-medium.jpg'),
    id: BoostId.ScrollMedium
  },
  {
    group: BoostGroup.H,
    exp: 100,
    sp: 100,
    name: 'Свиток Опыта/SP - Высокое Качество',
    image: require('./images/scroll-high.jpg'),
    id: BoostId.ScrollHigh
  },
  {
    group: BoostGroup.H,
    exp: 35,
    sp: 35,
    name: 'Свиток Опыта/SP Замка - Обычный',
    image: require('./images/scroll-castle.jpg'),
    id: BoostId.ScrollCastle
  },
  {
    group: BoostGroup.H,
    exp: 45,
    sp: 45,
    name: 'Свиток Опыта/SP Замка - Среднего качества',
    image: require('./images/scroll-castle-medium.jpg'),
    id: BoostId.ScrollCastleMedium
  },

  {
    group: BoostGroup.I,
    exp: 20,
    sp: 20,
    name: 'Свиток Опыта/SP (Олимпиада)',
    image: require('./images/scroll-oly.jpg'),
    id: BoostId.ScrollOly
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Шторма',
    image: require('./images/storm.jpg'),
    id: BoostId.Storm
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Сильного Шторма',
    image: require('./images/storm.jpg'),
    id: BoostId.StormHeavy
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Роста Спасителя',
    image: require('./images/savior.jpeg'),
    id: BoostId.Savior
  },

  {
    group: BoostGroup.J,
    exp: 20,
    sp: 20,
    name: 'Рисовый Пирожок Боевого Духа',
    image: require('./images/pie.jpg'),
    id: BoostId.Pie
  },
  {
    group: BoostGroup.J,
    exp: 30,
    sp: 30,
    name: 'Рисовый Пирожок Пылающего Боевого Духа',
    image: require('./images/pie-high.jpg'),
    id: BoostId.PieHigh
  },

  {
    group: BoostGroup.K,
    exp: 5,
    sp: 5,
    name: 'Особый Плод Пирата',
    image: require('./images/pirate.jpg'),
    id: BoostId.Pirate
  },
  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Дракона',
    image: require('./images/dragon.jpg'),
    id: BoostId.Dragon
  },

  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Героя Олимпиады',
    image: require('./images/oly-hero.jpeg'),
    id: BoostId.OlyHero
  },

  {
    group: BoostGroup.L,
    exp: 50,
    sp: 50,
    name: 'Слезы Золотой Русалки',
    image: require('./images/tears.jpg'),
    id: BoostId.Tears
  },

  {
    group: BoostGroup.M,
    exp: 5,
    sp: 5,
    name: 'Всепоглощающая Сила Праздничной Шляпы',
    image: require('./images/hat.jpg'),
    id: BoostId.Hat
  },

  {
    group: BoostGroup.N,
    exp: 3,
    sp: 3,
    name: 'Благословение Света',
    image: require('./images/bless-light.jpg'),
    id: BoostId.BlessingLight
  },

  {
    group: BoostGroup.O,
    exp: 10,
    sp: 10,
    name: 'Руна Опыта Завсегдатая',
    image: require('./images/rune-frequenter.jpeg'),
    id: BoostId.RuneFrequenter
  },

  {
    group: BoostGroup.P,
    exp: 20,
    sp: 20,
    name: 'Амулет Опыта Героя',
    image: require('./images/amulet-hero.jpg'),
    id: BoostId.AmuletHero
  },

  {
    group: BoostGroup.Q,
    exp: 5,
    sp: 5,
    name: 'Изобилие Клана - Ур.1',
    image: require('./images/clan-exuberance.jpg'),
    id: BoostId.ClanExuberanceOne
  },
  {
    group: BoostGroup.Q,
    exp: 8,
    sp: 8,
    name: 'Изобилие Клана - Ур.2',
    image: require('./images/clan-exuberance.jpg'),
    id: BoostId.ClanExuberanceTwo
  },
  {
    group: BoostGroup.Q,
    exp: 11,
    sp: 11,
    name: 'Изобилие Клана - Ур.3',
    image: require('./images/clan-exuberance.jpg'),
    id: BoostId.ClanExuberanceThree
  },
  {
    group: BoostGroup.Q,
    exp: 15,
    sp: 15,
    name: 'Изобилие Клана - Ур.4',
    image: require('./images/clan-exuberance.jpg'),
    id: BoostId.ClanExuberanceFour
  }
];

export const groups = Object.keys(BoostGroup);

interface BoostByGroup {
  [key: string]: Boost[];
}

export const byGroup: BoostByGroup = boosts.reduce(
  (acc, boost) => {
    const group: BoostGroup = boost.group;

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group] = [...acc[group], boost];
    return acc;
  },
  {} as BoostByGroup
);

interface BoostById {
  [key: string]: Boost;
}

export const byId: BoostById = boosts.reduce(
  (acc, boost) => {
    acc[boost.id] = boost;
    return acc;
  },
  {} as BoostById
);
