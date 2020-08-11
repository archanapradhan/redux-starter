import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
// createStore is another example of
//higher order function which takes a function as an argument

export default store;
