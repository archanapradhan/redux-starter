import * as actions from "./actionsTypes";
import { combineReducers } from "redux";

let lastId = 0;

//When the application starts and the reducer is called the state will throw undefined error
//to resolve it, we should initialize the state with an empty array . It handles undefined issue when redux calls reducer
export function reducer(state = [], action) {
  console.log("store action", action);
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          descrpition: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}

export function reducer2(state = [], action) {
  console.log("store action", action);
  if (action.type === "Archana Pradhan") {
    return 538;
  }
  return 123;
}

export default combineReducers({
  reducer,
  reducer2,
});
