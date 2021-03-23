import './Trip.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {apiConfig} from '../../../config/apiConfig';

import { useEffect, useState } from 'react';

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

const Trip = ({trip}) => {

    const [showDetails,setShowDetails] = useState(false);
    const [edit,setEdit] = useState(false);
    const [tripDetails,setTripDetails] = useState(trip);

    useEffect(() => {
        console.log(showDetails,'showDetails');
            getTrip(trip.id);
    },[]);


    const getTrip = async (id) => {
        try {
            const result = await fetch(`${apiConfig.trips.url}/${id}`);
            const details = await result.json();
            if (details ) {
                setTripDetails(details);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return edit ? 
    <div className="text-warning" onClick={(e) =>{e.stopPropagation(); setEdit(false);}}>Coming Soon !!</div> :
    <div className="Trip" onClick={() => setShowDetails(!showDetails)} >
        <h4>{tripDetails.name}</h4>
        <div>
            <span>{trip.startDate}  </span><Badge variant={badgeVariant(tripDetails.status)}>{tripDetails.status}</Badge>
        </div>
        {showDetails && 
        <> 
            <div>{tripDetails.destination}</div>
            <div><span>{tripDetails.type.toLowerCase()}</span> trip via <span>{tripDetails.commute.toLowerCase()}</span> from <span>{tripDetails.startDate}</span> to <span>{tripDetails.endDate}</span></div>
            <Button variant="dark" size="sm" onClick={(e) =>{e.stopPropagation(); setEdit(true);}}>Modify</Button>
        </>}
    </div>;
    
    
};

export default Trip;
