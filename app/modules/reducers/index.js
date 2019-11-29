import { combineReducers } from "redux-immutable";
import pageReducer from "./pageReducer";

const combinedReducers = combineReducers({
    pageReducer: pageReducer
})

export default combinedReducers
