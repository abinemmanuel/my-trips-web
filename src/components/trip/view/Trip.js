import './Trip.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { invokeGetTripDetails } from '../../../store/actions/tripsAction';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const badgeVariant = (status) => {
    switch (status) {
        case 'COMPLETED':
            return 'success';
        case 'CANCELLED':
            return 'secondary';
        case 'PLANNED':
            return 'info';
        case 'ON HOLD':
            return 'warning';
        default:
            return 'danger';
    }
};

const Trip = ({ trip }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(showDetails, 'showDetails');
        if (showDetails) {
            invokeGetTripDetails(dispatch, trip.id);
        }
    }, [dispatch, showDetails, trip]);

    const tripDetails = useSelector(state => state.tripDetails[trip.id]);


    return edit ?
        <div className="text-warning" onClick={(e) => { e.stopPropagation(); setEdit(false); }}>Coming Soon !!</div> :
        <div className="Trip" onClick={() => setShowDetails(!showDetails)} >
            <h4>{trip.name}</h4>
            <div>
                <span>{trip.startDate}  </span><Badge variant={badgeVariant(trip.status)}>{trip.status}</Badge>
            </div>
            {showDetails && tripDetails &&
                <>
                    <div>{tripDetails.destination}</div>
                    <div><span>{tripDetails.type.toLowerCase()}</span> trip via <span>{tripDetails.commute.toLowerCase()}</span> from <span>{tripDetails.startDate}</span> to <span>{tripDetails.endDate}</span></div>
                    <Button variant="dark" size="sm" onClick={(e) => { e.stopPropagation(); setEdit(true); }}>Modify</Button>
                </>}
        </div>;


};

export default Trip;
