import { useEffect, useState } from 'react';
import {apiConfig} from '../../../config/apiConfig';

const About = () => {
    useEffect(() => {
        getFeatures();
    });

    const [features,setFeatures] = useState('');
    const getFeatures = async () => {
        try {
            const result = await fetch(apiConfig.baseUrl);
            const tripList = await result.text();
            if (tripList && tripList.length > 0) {
                setFeatures(tripList);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
    <div>
        <h3>My Trips React Web Application</h3>
        <div> Sample web application to track and manage Trips and to demonstrate the features of react app in various iterations.</div>
        <pre>{features}</pre>
    </div>);
};

export default About;
