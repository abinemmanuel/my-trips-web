import * as actionTypes from '../actionTypes';

const initialState = {};

const tripDetailsReducer = (state = initialState, action) => {
    // console.log('tripDetailsReducer',action);
    // process action and transform state as required.
    switch (action.type) {
        case actionTypes.TRIP_DETAILS_LOAD_SUCCESS:
            return {...state, [action.payload.id]:  action.payload};
        case actionTypes.TRIP_DETAILS_LOAD_FAILED:
            return {...state, error:  action.payload};
        default:
            return state;
        }
};

export default tripDetailsReducer;
