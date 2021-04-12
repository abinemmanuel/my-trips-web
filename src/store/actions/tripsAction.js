import * as actionTypes from '../actionTypes';

const invokeGetTrips = (dispatch) => {
    dispatch({type: actionTypes.TRIPS_LOAD_START});
};

export const invokeGetTripDetails = (dispatch, id) => {
    dispatch({type: actionTypes.TRIP_DETAILS_LOAD_START, id});
};

export default invokeGetTrips;
