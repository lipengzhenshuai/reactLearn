import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.js';
import reducer from "./reducer.js";
let sagaMiddleware = createSagaMiddleware(); // 创建中间件
let store= applyMiddleware(sagaMiddleware)(createStore)(reducer); // 传入中间件
sagaMiddleware.run(rootSaga); // 运行根saga
export default store;
