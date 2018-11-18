import { BoostId, TimeUnit } from './constants';
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
  ChangePenaltyTo = 'ChangePenaltyTo',

  SetLevelFrom = 'SetLevelFrom',
  SetLevelTo = 'SetLevelTo',
  SetSavedExp = 'SetSavedExp',
  ToggleSavedExp = 'ToggleSavedExp',
  SetTime = 'SetTime',
  SetTimeUnit = 'SetTimeUnit'
}

export type AppActions =
  | AnyAction
  | ToggleAction
  | SetValueAction
  | ToggleRawExpLockAction
  | PartyActions
  | LevelingActions;

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

type SetLevelFromAction = AppAction<{ level: number }, ActionType.SetLevelFrom>;
type SetLevelToAction = AppAction<{ level: number }, ActionType.SetLevelTo>;
type SetSavedExpAction = AppAction<{ exp: number }, ActionType.SetSavedExp>;
type ToggleSavedExpAction = AppAction<
  { value: boolean },
  ActionType.ToggleSavedExp
>;
type SetTimeAction = AppAction<{ time: number }, ActionType.SetTime>;
type SetTimeUnitAction = AppAction<{ unit: TimeUnit }, ActionType.SetTimeUnit>;
export type LevelingActions =
  | SetLevelFromAction
  | SetLevelToAction
  | SetSavedExpAction
  | ToggleSavedExpAction
  | SetTimeAction
  | SetTimeUnitAction;

export const setLevelFrom = (level: number): SetLevelFromAction => ({
  type: ActionType.SetLevelFrom,
  payload: { level }
});

export const setLevelTo = (level: number): SetLevelToAction => ({
  type: ActionType.SetLevelTo,
  payload: { level }
});

export const setSavedExp = (exp: number): SetSavedExpAction => ({
  type: ActionType.SetSavedExp,
  payload: { exp }
});

export const toggleSavedExp = (value: boolean): ToggleSavedExpAction => ({
  type: ActionType.ToggleSavedExp,
  payload: { value }
});

export const setTime = (time: number): SetTimeAction => ({
  type: ActionType.SetTime,
  payload: { time }
});

export const setTimeUnit = (unit: TimeUnit): SetTimeUnitAction => ({
  type: ActionType.SetTimeUnit,
  payload: { unit }
});
