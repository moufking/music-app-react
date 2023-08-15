import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import musicReducer from "./reducers/musicReducer";

const store = createStore(
  musicReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;