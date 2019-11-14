import combinedReducers from '../reducers/index';
import Immutable from "immutable";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

const initialState = new Immutable.Map({
    pageReducer: Immutable.Map({
        pageList: []
    })
})

export default function configureStore() {
    const store = createStore(
      combinedReducers,
      initialState,
      compose(
        applyMiddleware(thunk),
      )
    )
    return {
      ...store
    };
  }