import { spawn, call } from 'redux-saga/effects';

/**
 * Keep Alive when child sagas fails so we dont crash the entire app
 */

export function* rootSagas() {
  const sagas = [];

  yield sagas.map(saga =>
    spawn(function*() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    }),
  );
}
