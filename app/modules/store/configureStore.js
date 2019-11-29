import combinedReducers from '../reducers/index';
import Immutable from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga/index'

const initialState = new Immutable.Map({
  pageReducer: Immutable.Map({
    counter: 0
  })
})


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combinedReducers,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware)
    )
  )
  return {
    ...store,
    runSaga: [sagaMiddleware.run(rootSaga)]
  }
}