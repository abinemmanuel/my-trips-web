
import {combineReducers} from 'redux';
import tripsReducer from './trips';
import tripDetailsReducer from './trip';

const rootReducer = combineReducers({
    trips: tripsReducer,
    tripDetails: tripDetailsReducer
});

export default rootReducer;
