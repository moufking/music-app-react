import musicReducer from "./musicReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musics: musicReducer,
});

export default rootReducer;