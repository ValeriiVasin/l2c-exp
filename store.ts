import { createStore, Reducer, compose, applyMiddleware } from 'redux';
import { root } from './reducers';

import storage from 'redux-storage';
import createEngine from 'redux-storage-engine-jsurl';

const engine = createEngine();
const reducer = storage.reducer(root as Reducer);
const middleware = storage.createMiddleware(engine);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware)
  // other store enhancers if any
);
export const store = createStore(reducer, enhancer);

const load = storage.createLoader(engine);
load(store)
  .then(newState => console.log('Loaded state:', newState));
