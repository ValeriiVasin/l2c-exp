import { AppState, BoostId } from './constants';

import { Reducer } from 'redux';
import { ActionType, AppActions, PartyActions } from './actions';
import { addBoost, toNumber, boostCoefficient } from './helpers';

const DEFAULT_PARTY_STATE: PartyState = {
  membersFrom: 1,
  membersTo: 2,
  penaltyFrom: 0,
  penaltyTo: 0
};

const DEFAULT_STATE: AppState = {
  boosts: [],
  party: DEFAULT_PARTY_STATE,
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

const partyReducer: Reducer<PartyState, PartyActions> = (
  state: PartyState = DEFAULT_PARTY_STATE,
  action: PartyActions
) => {
  switch (action.type) {
    case ActionType.ChangeMembersFrom:
      return {
        ...state,
        membersFrom: action.payload.members,
        penaltyFrom: action.payload.members === 1 ? 0 : state.penaltyFrom
      };
    case ActionType.ChangePenaltyFrom:
      return { ...state, penaltyFrom: action.payload.penalty };
    case ActionType.ChangeMembersTo:
      return {
        ...state,
        membersTo: action.payload.members,
        penaltyTo: action.payload.members === 1 ? 0 : state.penaltyTo
      };
    case ActionType.ChangePenaltyTo:
      return { ...state, penaltyTo: action.payload.penalty };
  }

  return state;
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

    case ActionType.ChangeMembersFrom:
    case ActionType.ChangeMembersTo:
    case ActionType.ChangePenaltyFrom:
    case ActionType.ChangePenaltyTo:
      return {
        ...state,
        party: partyReducer(state.party, action as PartyActions)
      };
  }
  return state;
};
