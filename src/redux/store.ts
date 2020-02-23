import { createStore } from "redux";
import rootReducer from "./reducers/index";

export type Store = {
  reducer: any;
};

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
