import React from 'react';
import { Button } from 'react-bootstrap';

const Courseinfo = ({ course }) => {
    const { name, img, price, details } = course;
    return (
        <div>
            <h1>{name}</h1>
            <p>{details}</p>
            <Button>Give Primmer Access</Button>
        </div>
    );
};

export default Courseinfo;