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
  INIT = '@@INIT'
}

interface InitAction extends AnyAction {};

export type AppActions = ToggleAction | SetValueAction | ToggleRawExpLockAction | InitAction;

type ToggleAction = AppAction<
  { id: BoostId; value: boolean },
  ActionType.ToggleBoost
>;
export const toggleBoost = (id: BoostId, value: boolean): ToggleAction => ({
  type: ActionType.ToggleBoost,
  payload: { id, value }
});

export const removeBoost = (id: BoostId): ToggleAction => toggleBoost(id, false);

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
