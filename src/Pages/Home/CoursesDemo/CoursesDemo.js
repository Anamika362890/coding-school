import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaClock, FaMoneyBill, FaMoneyCheck, FaShoppingCart, FaTimes } from 'react-icons/fa';
import './CoursesDemo.css'

const CoursesDemo = ({ course }) => {
    const { id, name, price, img, duration } = course;
    return (
        <div >


            <Row  >

                <Col  >
                    <Card style={{ width: '330px' }}>
                        <Card.Img className='img' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>  {name}</Card.Title>
                            <Card.Text>

                                <p> <FaShoppingCart></FaShoppingCart> {price} Tk Only</p>

                                <p><FaClock></FaClock> {duration} </p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>


        </div >


    );
};

export default CoursesDemo;