import LZ from 'lz-string';
import { createStore } from 'redux';
import { AppState } from './constants';
import { root } from './reducers';

export const store = createStore(
  root,
  load(root(undefined, { type: '@@INIT' })),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f
);

function load(state: AppState): AppState {
  const hash = window.location.hash.slice(1);

  if (!hash) {
    return state;
  }

  try {
    return {
      ...state,
      ...(JSON.parse(LZ.decompressFromEncodedURIComponent(hash) ?? '')
        .state as AppState),
    };
  } catch {
    return state;
  }
}

store.subscribe(() => {
  window.location.hash = LZ.compressToEncodedURIComponent(
    JSON.stringify({ state: store.getState() })
  );
});
