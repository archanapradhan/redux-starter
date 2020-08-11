import store from "./store";
import { bugAdded, bugRemoved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

unsubscribe();

console.log(store);
console.log("store getstate: ", store.getState());
