import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import indexOfReducers from './store/reducers/';

const configureStore = (initialState) => {
  const store = createStore(indexOfReducers, initialState, composeWithDevTools(applyMiddleware(createLogger(), thunk)));
  return store;
}

export default configureStore;