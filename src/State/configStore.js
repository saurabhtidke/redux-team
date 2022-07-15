import { createStore, combineReducers } from "redux";
import { gameReducer } from "./Reducer/gameReducer";
import { coachReducer } from "./Reducer/coachReducer";

export const configstore = () => {
  const myStore = createStore(
    combineReducers({ gameReducer, coachReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
