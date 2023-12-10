import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import clozeReducer from "./clozeReducer";
import comprehensionReducer from "./comprehensionReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  cloze: clozeReducer,
  comprehension: comprehensionReducer,
});

export default rootReducer;
