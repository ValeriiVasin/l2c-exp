import { Boost, byId } from './boost';
import { BoostId } from './constants';

export const addBoost = (ids: BoostId[], id: BoostId): BoostId[] => {
  const group = byId[id].group;

  return [...ids.filter(id => byId[id].group !== group), id];
};
