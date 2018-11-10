import { BoostId } from './constants';
import { Action } from 'redux';

export interface AppAction<Payload, T = ActionType> extends Action<T> {
  type: T;
  payload: Payload;
}

export enum ActionType {
  ToggleBoost = 'ToggleBoost',
  SetValue = 'SetValue'
}

export type AppActions = ToggleAction | SetValueAction;

type ToggleAction = AppAction<
  { id: BoostId; value: boolean },
  ActionType.ToggleBoost
>;
export const toggleBoost = (id: BoostId, value: boolean): ToggleAction => ({
  type: ActionType.ToggleBoost,
  payload: { id, value }
});

type SetValueAction = AppAction<{ value: string }, ActionType.SetValue>;
export const setValue = (value: string): SetValueAction => ({
  type: ActionType.SetValue,
  payload: { value }
});
