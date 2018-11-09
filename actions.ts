import { BoostId } from './constants';
import { Action } from 'redux';

export interface AppAction<Payload, T = ActionType> extends Action<T> {
  type: T;
  payload: Payload;
}

export enum ActionType {
  ToggleBoost = 'ToggleBoost'
}

export type AppActions = ToggleAction;

type ToggleAction = AppAction<{ id: BoostId, value: boolean }, ActionType.ToggleBoost>;
export const toggleBoost = (id: BoostId, value: boolean): ToggleAction => ({
  type: ActionType.ToggleBoost,
  payload: { id, value }
});
