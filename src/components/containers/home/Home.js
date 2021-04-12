import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Trip from '../../trip/view/Trip';
import './Home.css';
import invokeGetTrips from '../../../store/actions/tripsAction';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        invokeGetTrips(dispatch);
    }, [dispatch]);

    const [addNew, setAddNew] = useState(false);
    const trips = useSelector(state => state.trips.trips) || [];

    return (
        <Container>
            <Row className="padded">
                <Col>
                    <h3>Visited</h3>
                    {trips.filter(trip => (trip.status === 'COMPLETED')).map(trip => (<Trip key={trip.id} trip={trip} />))}
                </Col>
                <Col>
                    <h3>Planned</h3>
                    {addNew ?
                        <div className="text-warning" onClick={() => setAddNew(false)}>Coming Soon !!</div> :
                        <Button variant="secondary" size="sm" block onClick={setAddNew}>Next Adventure</Button>}
                    {trips.filter(trip => (trip.status !== 'COMPLETED')).map(trip => (<Trip key={trip.id} trip={trip} />))}
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
