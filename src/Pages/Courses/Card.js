import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cards = ({ course }) => {
    const { name, img, details, id } = course;
    return (
        <div >


            <Card style={{ width: '300px', height: '75vh' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h2>{name}</h2>
                    </Card.Title>
                    <Card.Text>
                        {details.slice(0, 200)}.....
                    </Card.Text>


                    <Link to={`/courses/${id}`}>
                        <button className='button2 mb-1'>See Details</button>
                    </Link>
                </Card.Body>


            </Card>
        </div >
    );
};

export default Cards;