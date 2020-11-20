import { createStore, combineReducers } from "redux";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
