import { all } from 'redux-saga/effects';
import applicationDataSaga from './applicationDataSaga';

export default function* rootSaga() {
    yield all([applicationDataSaga(),]);
}