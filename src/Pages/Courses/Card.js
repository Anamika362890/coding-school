import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Cards = ({ course }) => {
    const { name, img, details } = course;
    return (
        <div>


            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 200)}.....
                    </Card.Text>
                    <Button>See Details</Button>
                </Card.Body>


            </Card>
        </div>
    );
};

export default Cards;