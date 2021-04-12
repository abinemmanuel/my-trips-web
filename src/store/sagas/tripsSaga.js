import { call, put, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import { apiConfig } from '../../config/apiConfig';

function* fetchTrips() {
    // console.log('fetchTrips saga');
    try {
        const trips = yield call(() => {
            return fetch(apiConfig.trips.url)
                .then(result => result.json())
                .catch(error => {
                    console.error(error);
                    throw error;
                });
        });
        // console.log('fetchTrips After Call', trips);

        yield put({ type: actionTypes.TRIPS_LOAD_SUCESS, payload: trips });
    } catch (error) {
        yield put({ type: actionTypes.TRIPS_LOAD_FAILED, payload: error });
    }

};

function* watchTripsLoad() {
    yield takeLatest(actionTypes.TRIPS_LOAD_START, fetchTrips);
}

export default watchTripsLoad;
