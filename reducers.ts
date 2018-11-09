import { AppState } from './constants';

import { Reducer } from 'redux';
import { ActionType, Action, AppActions } from './actions';

const DEFAULT_STATE: AppState = {
  boosts: []
};

export const root: Reducer<AppState, AppActions> = (
  state: AppState = DEFAULT_STATE,
  action: AppActions
) => {
  switch (action.type) {
    case ActionType.ToggleBoost: {
      const { id, value } = action.payload;
      const boosts = state.boosts;

      if (value) {
        return {
          ...state,
          boosts: [...state.boosts, id]
        };
      }

      return {
        ...state,
        boosts: boosts.filter(boost => boost !== id)
      };
    }
  }
  return state;
};
