import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {helloSaga} from './sagas.js';
import reducer from "./reducer";
let sagaMiddleware = createSagaMiddleware();
let store= applyMiddleware(sagaMiddleware)(createStore)(reducer);
sagaMiddleware.run(helloSaga);
export default store;
