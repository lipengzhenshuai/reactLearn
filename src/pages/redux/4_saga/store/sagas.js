import { take, put } from "redux-saga/effects";
export default function* rootSaga() {
    yield take("ASYNC_ADD");
    yield new Promise(resolve => { setTimeout(() => resolve(), 1000 ) })
    console.log('1111');
    yield put({ type: "ADD" });
}