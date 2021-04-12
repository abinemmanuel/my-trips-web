import * as actionTypes from '../actionTypes';

const initialState = {
    trips: []
};

const tripsReducer = (state = initialState, action) => {
    // console.log('tripsReducer',action);
    // process action and transform state as required.
    switch (action.type) {
        case actionTypes.TRIPS_LOAD_SUCESS:
            return {...state, trips:  action.payload};
        case actionTypes.TRIPS_LOAD_FAILED:
            return {...state, error:  action.payload};
        default:
            return state;
        }
};

export default tripsReducer;
