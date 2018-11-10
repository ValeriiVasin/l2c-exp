import { addBoost, toNumber } from './helpers';
import { BoostId } from './constants';

describe('add boost', () => {
  it('different groups', () => {
    expect(addBoost([BoostId.FortuneOne], BoostId.Ragu)).toEqual([
      BoostId.FortuneOne,
      BoostId.Ragu
    ]);
  });

  it('same group', () => {
    expect(addBoost([BoostId.FortuneOne], BoostId.FortuneTwo)).toEqual([
      BoostId.FortuneTwo
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
