import { addBoost } from './helpers';
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
