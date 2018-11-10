import { byId } from './boost';
import { BoostId } from './constants';

export const addBoost = (ids: BoostId[], id: BoostId): BoostId[] => {
  const group = byId[id].group;

  return [...ids.filter(id => byId[id].group !== group), id];
};

export const toNumber = (value: string): number => {
  // multiplier for kk numbers
  const multiplier = Math.pow(
    10,
    3 * (value.trim().length - value.trim().replace(/k*$/g, '').length)
  );

  return (
    multiplier *
    Number(
      value
        .replace(/\s/g, '')
        .replace(/,/g, '.')
        .replace(/k/g, '')
    )
  );
};
