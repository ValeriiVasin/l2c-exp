declare module '*.css';
declare module 'identity-obj-proxy';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
}

interface PartyState {
  membersFrom: number;
  penaltyFrom: number;
  membersTo: number;
  penaltyTo: number;
}

interface ExpState {
  value: string;
  exp: number;
  rawExp: number;
  rawExpLocked: boolean;
}
