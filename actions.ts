import { BoostId } from './constants';
import { Action, AnyAction } from 'redux';

export interface AppAction<Payload, T = ActionType> extends Action<T> {
  type: T;
  payload: Payload;
}

export enum ActionType {
  ToggleBoost = 'ToggleBoost',
  SetValue = 'SetValue',
  ToggleRawExpLock = 'ToggleRawExpLock',

  ChangeMembersFrom = 'ChangeMembersFrom',
  ChangePenaltyFrom = 'ChangePenaltyFrom',
  ChangeMembersTo = 'ChangeMembersTo',
  ChangePenaltyTo = 'ChangePenaltyTo'
}



export type AppActions =
  | AnyAction
  | ToggleAction
  | SetValueAction
  | ToggleRawExpLockAction
  | PartyActions;

type ToggleAction = AppAction<
  { id: BoostId; value: boolean },
  ActionType.ToggleBoost
>;
export const toggleBoost = (id: BoostId, value: boolean): ToggleAction => ({
  type: ActionType.ToggleBoost,
  payload: { id, value }
});

export const removeBoost = (id: BoostId): ToggleAction =>
  toggleBoost(id, false);

type SetValueAction = AppAction<{ value: string }, ActionType.SetValue>;
export const setValue = (value: string): SetValueAction => ({
  type: ActionType.SetValue,
  payload: { value }
});

type ToggleRawExpLockAction = AppAction<
  { value: boolean },
  ActionType.ToggleRawExpLock
>;
export const toggleRawExpLock = (value: boolean): ToggleRawExpLockAction => ({
  type: ActionType.ToggleRawExpLock,
  payload: { value }
});

type ChangeMembersFromActon = AppAction<
  { members: number },
  ActionType.ChangeMembersFrom
>;
export const changeMembersFrom = (members: number): ChangeMembersFromActon => ({
  type: ActionType.ChangeMembersFrom,
  payload: { members }
});

type ChangeMembersToActon = AppAction<
  { members: number },
  ActionType.ChangeMembersTo
>;
export const changeMembersTo = (members: number): ChangeMembersToActon => ({
  type: ActionType.ChangeMembersTo,
  payload: { members }
});

type ChangePenaltyFromActon = AppAction<
  { penalty: number },
  ActionType.ChangePenaltyFrom
>;
export const changePenaltyFrom = (penalty: number): ChangePenaltyFromActon => ({
  type: ActionType.ChangePenaltyFrom,
  payload: { penalty }
});
type ChangePenaltyToActon = AppAction<
  { penalty: number },
  ActionType.ChangePenaltyTo
>;
export const changePenaltyTo = (penalty: number): ChangePenaltyToActon => ({
  type: ActionType.ChangePenaltyTo,
  payload: { penalty }
});
export type PartyActions =
  | ChangeMembersFromActon
  | ChangeMembersToActon
  | ChangePenaltyFromActon
  | ChangePenaltyToActon;
