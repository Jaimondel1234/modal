import { createStore, combineReducers } from 'redux';
import { uiReducer } from '../reducers/uiReducer';
import { noteReducer } from '../reducers/noteReducer';
import { authReducer } from '../reducers/authReducer';

/* 
  Store
 */
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes: noteReducer,
});

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
