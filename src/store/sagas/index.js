
import { all } from 'redux-saga/effects';
import watchTripDetailsLoad from './tripDetailsSaga';
import watchTripsLoad from './tripsSaga';

function* rootSaga() {
    // console.log('rootSaga');
    // import and add sagas to array as needed
    yield all([
        watchTripsLoad(),
        watchTripDetailsLoad()
    ]);
}

export default rootSaga;
