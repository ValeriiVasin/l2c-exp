import { AppState, BoostId } from './constants';

import { Reducer } from 'redux';
import { ActionType, AppActions } from './actions';
import { addBoost, toNumber, boostCoefficient } from './helpers';

const DEFAULT_STATE: AppState = {
  boosts: [],
  exp: {
    value: '',
    exp: 0,
    rawExp: 0
  }
};

const withExpUpdate = (state: AppState): AppState => {
  const exp = state.exp.exp;
  const rawExp = exp / boostCoefficient(state.boosts);

  return {
    ...state,
    exp: {
      ...state.exp,
      rawExp
    }
  };
};

export const root: Reducer<AppState, AppActions> = (
  state: AppState = DEFAULT_STATE,
  action: AppActions
) => {
  switch (action.type) {
    case ActionType.ToggleBoost: {
      const { id, value } = action.payload;

      if (value) {
        return withExpUpdate({
          ...state,
          boosts: addBoost(state.boosts, id)
        });
      }

      return withExpUpdate({
        ...state,
        boosts: state.boosts.filter(boost => boost !== id)
      });
    }

    case ActionType.SetValue: {
      const { value } = action.payload;
      const exp = toNumber(value);
      const rawExp = exp / boostCoefficient(state.boosts);

      return {
        ...state,
        exp: {
          exp,
          value,
          rawExp
        }
      };
    }
  }
  return state;
};
