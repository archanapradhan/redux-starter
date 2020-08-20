import ConfigureStore from "./ConfigureStore";
import { bugAdded, bugRemoved } from "./actions";

const store = ConfigureStore({});
const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch({ type: "Archana Pradhan", payload: "frigging hell redux" });

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

unsubscribe();

console.log(store);
console.log("store getstate: ", store.getState());
