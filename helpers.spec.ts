import {
  addBoost,
  toNumber,
  formatNumber,
  boostCoefficient,
  boostPercentage
} from './helpers';
import { BoostId } from './constants';

describe('add boost', () => {
  it('different groups', () => {
    expect(addBoost([BoostId.ClanFortuneOne], BoostId.Ragu)).toEqual([
      BoostId.ClanFortuneOne,
      BoostId.Ragu
    ]);
  });

  it('same group', () => {
    expect(addBoost([BoostId.ClanFortuneOne], BoostId.ClanFortuneTwo)).toEqual([
      BoostId.ClanFortuneTwo
    ]);
  });
});

describe('parsing string to number', () => {
  it('parses number', () => {
    expect(toNumber('10')).toBe(10);
  });

  it('parses number with trailing space', () => {
    expect(toNumber('10 ')).toBe(10);
  });

  it('parses number with spaces in between', () => {
    expect(toNumber('10 000 000')).toBe(10000000);
  });

  it('parses floating number', () => {
    expect(toNumber('10.2')).toBe(10.2);
  });

  it('parses floating number with comma separator', () => {
    expect(toNumber('10,2')).toBe(10.2);
  });

  it('parses k suffix', () => {
    expect(toNumber('10k')).toBe(10000);
    expect(toNumber('10kk')).toBe(10000000);
  });

  it('parses k suffix with floating number', () => {
    expect(toNumber('10.2k')).toBe(10200);
    expect(toNumber('10,2k')).toBe(10200);
    expect(toNumber('10.2kk')).toBe(10200000);
  });
});

describe('formatting number', () => {
  it('does not format numbers below 1000', () => {
    expect(formatNumber(999)).toBe('999');
  });

  it('splits every 3 digit with the space for numbers above 999', () => {
    expect(formatNumber(1000)).toBe('1 000');
    expect(formatNumber(10000)).toBe('10 000');
  });

  it('truncates fractional part by default', () => {
    expect(formatNumber(1000.22)).toBe('1 000');
  });

  it('appends fractional part without formatting and using the dot as a separator', () => {
    expect(formatNumber(1000.22, 2)).toBe('1 000.22');
  });

  it('rounds fractional part to 2 digits', () => {
    expect(formatNumber(22.3333, 2)).toBe('22.33');
  });

  it('formats NaN as an empty', () => {
    expect(formatNumber(NaN)).toBe('');
  });
});

describe('boost percentage', () => {
  it('returns 0 for when no ids', () => {
    expect(boostPercentage([])).toBe(0);
  });

  it('single boost item', () => {
    expect(boostPercentage([BoostId.Ragu])).toBe(10);
  });

  it('few boost items', () => {
    expect(boostPercentage([BoostId.Ragu, BoostId.ClanUnityFour])).toBe(20);
  });
});

describe('boost coefficient', () => {
  it('returns 1 for if no boosts provided', () => {
    expect(boostCoefficient([])).toBe(1);
  });

  it('returns proper coefficient for single item', () => {
    expect(boostCoefficient([BoostId.ClanFortuneThree])).toBe(1.1);
  });

  it('returns proper coefficient for few items', () => {
    expect(
      boostCoefficient([BoostId.ClanFortuneThree, BoostId.ClanUnityFour])
    ).toBe(1.2);
  });
});
