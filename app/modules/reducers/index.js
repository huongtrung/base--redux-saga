import { combineReducers } from "redux-immutable";
import pageReducer from "./pageReducer";

const combinedReducers = combineReducers({
    pageReducer
})

export default combinedReducers
