import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { loadState, saveState } from "../localstorage/localstorage";

const persistedState = loadState();

export type Store = {
  reducer: any;
};

const store = createStore(
  rootReducer,
  persistedState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
