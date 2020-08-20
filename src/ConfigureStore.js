import { createStore, applyMiddleware, compose } from "redux";
// import { routerMiddleware } from 'connected-react-router'
import thunk from "redux-thunk";
// import createHistory from "history/createBrowserHistory";
import reducers from "./reducer";

// export const history = createHistory();

const enhancers = [];
// const middleware = [thunk, routerMiddleware(history)]
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configureStore(preloadedState) {
  const store = createStore(
    reducers, // root reducer with router state
    preloadedState,
    composedEnhancers
  );

  return store;
}