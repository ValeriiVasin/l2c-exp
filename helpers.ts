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

export const formatNumber = (value: number): string => {
  if (Number.isNaN(value)) {
    return '';
  }

  const decimal = Math.floor(value);
  const fractional = value - decimal;

  const fractionalString = fractional
    ? `.${fractional.toFixed(2).slice(-2)}`
    : '';
  const decimalString = String(decimal)
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      if (index % 3 === 2) {
        return ` ${digit}${acc}`;
      }

      return `${digit}${acc}`;
    }, '')
    .trim();

  return `${decimalString}${fractionalString}`;
};
