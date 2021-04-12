import {takeLatest, call, put} from 'redux-saga/effects';
import {apiConfig} from '../../config/apiConfig';
import * as actionTypes from '../actionTypes';

const getTripDetails = async (id) => {
    try {
        const result = await fetch(`${apiConfig.trips.url}/${id}`);
        return await result.json();

    } catch (error) {
        console.log(error);
        throw error;
    }
};

function* fetchTripDetails(args) {
    //  console.log('fetchTripDetails saga',args);
    try {
        const trip = yield call(async () => {
            return getTripDetails(args.id);
        } );
        // console.log('fetchTrips After Call', trip);

        yield put({ type: actionTypes.TRIP_DETAILS_LOAD_SUCCESS, payload: trip });
    } catch (error) {
        yield put({ type: actionTypes.TRIP_DETAILS_LOAD_FAILED, payload: error });
    }
};

function* watchTripDetailsLoad() {
    yield takeLatest(actionTypes.TRIP_DETAILS_LOAD_START, fetchTripDetails);
}

export default watchTripDetailsLoad;
