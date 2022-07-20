import { take, put } from "redux-saga/effects";
export function* helloSaga() {
    for (let i = 0; i < 3; i++) {
        yield take("ASYNC_ADD");
        console.log('1111');
        yield put({type: "ADD"});
    }
}