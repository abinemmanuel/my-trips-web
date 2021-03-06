import React, { useState } from 'react';
import { Col, Row , Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Trip from '../../trip/view/Trip';
import './Home.css';
import trips from '../../../resources/trips.json';


function Home() {

    const [addNew, setAddNew] = useState(false);

    const completed = trips.filter(trip => (trip.status === 'COMPLETED')).map(trip => (<Trip key={trip.id} trip={trip}/>));
       
    const planned = trips.filter(trip => (trip.status !== 'COMPLETED')).map(trip => (<Trip key={trip.id} trip={trip}/>));

    return (
    <Container>
    <Row className="padded">
        <Col>
            <h3>Visited</h3>
            {completed}
        </Col> 
        <Col>
            <h3>Planned</h3>
            {addNew ?
             <div className="text-warning" onClick={() => setAddNew(false)}>Coming Soon !!</div> :
             <Button variant="secondary" size="sm" block onClick={setAddNew}>Next Adventure</Button>}
            {planned}
        </Col>
    </Row>
   </Container>
   );
}

export default Home;
