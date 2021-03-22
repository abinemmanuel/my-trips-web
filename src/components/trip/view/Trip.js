import './Trip.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

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


    return edit ? 
    <div className="text-warning" onClick={(e) =>{e.stopPropagation(); setEdit(false);}}>Coming Soon !!</div> :
    <div className="Trip" onClick={() => setShowDetails(!showDetails)} >
        <h4>{trip.name}</h4>
        <div>
            <span>{trip.startDate}  </span><Badge variant={badgeVariant(trip.status)}>{trip.status}</Badge>
        </div>
        {showDetails && 
        <> 
            <div>{trip.destination}</div>
            <div>Additional Details..</div><Button variant="dark" size="sm" onClick={(e) =>{e.stopPropagation(); setEdit(true);}}>Modify</Button>
        </>}
    </div>;
    
    
};

export default Trip;
