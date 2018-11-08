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

interface Boost {
  group: BoostGroup;
  exp: number;
  sp: number;
  name: string;
  image: string;
}

const TDB_IMAGE = 'https://via.placeholder.com/32x32';

export const boosts: Boost[] = [
  {
    group: BoostGroup.A,
    exp: 3,
    sp: 0,
    name: 'Удача Клана - Ур.1',
    image: 'https://l2central.info/c/images/b/b5/Skill_392.jpg'
  },
  {
    group: BoostGroup.A,
    exp: 6,
    sp: 0,
    name: 'Удача Клана - Ур.2',
    image: 'https://l2central.info/c/images/b/b5/Skill_392.jpg'
  },
  {
    group: BoostGroup.A,
    exp: 10,
    sp: 0,
    name: 'Удача Клана - Ур.3',
    image: 'https://l2central.info/c/images/b/b5/Skill_392.jpg'
  },

  {
    group: BoostGroup.B,
    exp: 3,
    sp: 3,
    name: 'Единство Клана - Ур.1',
    image: 'https://l2central.info/c/images/2/2f/Skill_55168_1.jpg'
  },

  {
    group: BoostGroup.B,
    exp: 5,
    sp: 5,
    name: 'Единство Клана - Ур.2',
    image: 'https://l2central.info/c/images/e/e6/Skill_55169_1.jpg'
  },
  {
    group: BoostGroup.B,
    exp: 7,
    sp: 7,
    name: 'Единство Клана - Ур.3',
    image: 'https://l2central.info/c/images/7/78/Skill_55170_1.jpg'
  },
  {
    group: BoostGroup.B,
    exp: 10,
    sp: 10,
    name: 'Единство Клана - Ур.4',
    image: 'https://l2central.info/c/images/2/21/Skill_55171_1.jpg'
  },

  {
    group: BoostGroup.C,
    exp: 100,
    sp: 100,
    name: 'Руна Опыта - 100% (2 часа)',
    image: 'https://l2central.info/c/images/1/1c/Item_70094.jpg'
  },

  {
    group: BoostGroup.D,
    exp: 50,
    sp: 50,
    name: 'Руна Опыта и SP 50%',
    image: 'https://l2central.info/c/images/1/1c/Item_70094.jpg'
  },

  {
    group: BoostGroup.E,
    exp: 50,
    sp: 50,
    name: 'Песочные Часы Ирен',
    image: 'https://l2central.info/c/images/4/49/Item_70263.jpg'
  },

  {
    group: BoostGroup.F,
    exp: 10,
    sp: 10,
    name: 'Рыбное Рагу - Благодарность Гильдии',
    image: 'https://l2central.info/c/images/c/c7/Item_49501.jpg'
  },
  {
    group: BoostGroup.F,
    exp: 100,
    sp: 100,
    name: 'Счастливый Мяч Данди',
    image: 'http://l2on.net//img/icons/g_ev_homerunball.png'
  },

  {
    group: BoostGroup.G,
    exp: 20,
    sp: 20,
    name: 'Благословение Кота-Ангела / Энергия Кота-Ангела',
    image: 'https://l2central.info/c/images/1/12/Item_35669.jpg'
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Свиток Благословения Сторожевой Башни',
    image: 'https://l2central.info/c/images/0/09/Item_49765.jpg'
  },
  {
    group: BoostGroup.G,
    exp: 30,
    sp: 30,
    name: 'Благословение Матрешки',
    image: TDB_IMAGE
  },

  {
    group: BoostGroup.H,
    exp: 30,
    sp: 30,
    name: 'Свиток Опыта/SP - Обычный',
    image: 'https://l2central.info/c/images/1/1a/Item_29648.jpg'
  },
  {
    group: BoostGroup.H,
    exp: 40,
    sp: 40,
    name: 'Свиток Опыта/SP - Среднее Качество',
    image: 'https://l2central.info/c/images/b/bc/Item_29649.jpg'
  },
  {
    group: BoostGroup.H,
    exp: 100,
    sp: 100,
    name: 'Свиток Опыта/SP - Высокое Качество',
    image: 'https://l2central.info/c/images/8/86/Item_29650.jpg'
  },
  {
    group: BoostGroup.H,
    exp: 35,
    sp: 35,
    name: 'Свиток Опыта/SP Замка - Обычный',
    image: 'https://l2central.info/c/images/b/b4/Item_29669.jpg'
  },
  {
    group: BoostGroup.H,
    exp: 45,
    sp: 45,
    name: 'Свиток Опыта/SP Замка - Среднего качества',
    image: 'https://l2central.info/c/images/f/f2/Item_29670.jpg'
  },

  {
    group: BoostGroup.I,
    exp: 20,
    sp: 20,
    name: 'Свиток Опыта/SP (Олимпиада)',
    image: 'https://l2central.info/c/images/a/ac/Item_29565.jpg'
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Шторма',
    image: 'https://l2central.info/c/images/0/08/Item_49420.jpg'
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Призыва Сильного Шторма',
    image: 'https://l2central.info/c/images/0/08/Item_49420.jpg'
  },
  {
    group: BoostGroup.I,
    exp: 50,
    sp: 50,
    name: 'Свиток Роста Спасителя',
    image: TDB_IMAGE
  },

  {
    group: BoostGroup.J,
    exp: 20,
    sp: 20,
    name: 'Рисовый Пирожок Боевого Духа',
    image: 'https://l2central.info/c/images/0/0f/Item_49080.jpg'
  },
  {
    group: BoostGroup.J,
    exp: 30,
    sp: 30,
    name: 'Рисовый Пирожок Пылающего Боевого Духа',
    image: 'https://l2central.info/c/images/2/23/Item_49081.jpg'
  },

  {
    group: BoostGroup.K,
    exp: 5,
    sp: 5,
    name: 'Особый Плод Пирата',
    image: 'https://l2central.info/c/images/8/8f/Item_49518.jpg'
  },
  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Дракона',
    image: 'https://l2central.info/c/images/1/1d/Item_70767.jpg'
  },
  // TODO: fix Image
  {
    group: BoostGroup.K,
    exp: 10,
    sp: 10,
    name: 'Особый Плод Героя Олимпиады',
    image: TDB_IMAGE
  },

  {
    group: BoostGroup.L,
    exp: 50,
    sp: 50,
    name: 'Слезы Золотой Русалки',
    image: 'https://l2central.info/c/images/6/66/Item_49585.jpg'
  },

  {
    group: BoostGroup.M,
    exp: 5,
    sp: 5,
    name: 'Всепоглощающая Сила Праздничной Шляпы',
    image: 'https://l2central.info/c/images/1/1c/Item_70094.jpg'
  },

  {
    group: BoostGroup.N,
    exp: 3,
    sp: 3,
    name: 'Благословение Света',
    image: TDB_IMAGE
  },

  {
    group: BoostGroup.O,
    exp: 10,
    sp: 10,
    name: 'Руна Опыта Завсегдатая',
    image: 'https://l2central.info/c/images/1/1c/Item_70094.jpg'
  },

  {
    group: BoostGroup.P,
    exp: 20,
    sp: 20,
    name: 'Амулет Опыта Героя',
    image: 'https://l2central.info/c/images/5/53/Item_90836.jpg'
  },

  {
    group: BoostGroup.Q,
    exp: 5,
    sp: 5,
    name: 'Изобилие Клана - Ур.1',
    image: 'https://l2central.info/c/images/7/7a/Skill_55887_2.jpg'
  },
  {
    group: BoostGroup.Q,
    exp: 8,
    sp: 8,
    name: 'Изобилие Клана - Ур.2',
    image: 'https://l2central.info/c/images/7/7a/Skill_55887_2.jpg'
  },
  {
    group: BoostGroup.Q,
    exp: 11,
    sp: 11,
    name: 'Изобилие Клана - Ур.3',
    image: 'https://l2central.info/c/images/7/7a/Skill_55887_2.jpg'
  },
  {
    group: BoostGroup.Q,
    exp: 15,
    sp: 15,
    name: 'Изобилие Клана - Ур.4',
    image: 'https://l2central.info/c/images/7/7a/Skill_55887_2.jpg'
  }
];
