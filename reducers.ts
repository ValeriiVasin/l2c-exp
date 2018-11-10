import { AppState, BoostId } from './constants';

import { Reducer } from 'redux';
import { ActionType, AppActions } from './actions';
import { addBoost, toNumber, boostCoefficient } from './helpers';

const DEFAULT_STATE: AppState = {
  boosts: [],
  exp: {
    value: '',
    exp: 0,
    rawExp: 0,
    rawExpLocked: false
  }
};

const withExpUpdate = (state: AppState): AppState => {
  const { exp, rawExp, rawExpLocked } = state.exp;
  const coefficient = boostCoefficient(state.boosts);

  return {
    ...state,
    exp: {
      ...state.exp,
      rawExp: rawExpLocked ? rawExp : exp / coefficient,
      exp: rawExpLocked ? rawExp * coefficient : exp
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
          ...state.exp,
          exp,
          value,
          rawExp
        }
      };
    }

    case ActionType.ToggleRawExpLock:
      return {
        ...state,
        exp: {
          ...state.exp,
          rawExpLocked: action.payload.value
        }
      };
  }
  return state;
};
