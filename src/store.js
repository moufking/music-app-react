import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import musicReducer from "./reducers/musicReducer";



const store = createStore(
    musicReducer,
    composeWithDevTools(applyMiddleware(thunk))

)

export default store