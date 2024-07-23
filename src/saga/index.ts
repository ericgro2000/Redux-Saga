import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import { countWatcher } from './countSaga';
import { userWatcher } from './userSaga';

export function* rootWatcher(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  yield all([
    fork(countWatcher),
    fork(userWatcher),
  ]);
}