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
                    <Card className='c' >
                        <Card.Img className='img1' variant="top" src={img} />
                        <Card.Body>
                            <Card.Title >  <h3>{name}</h3></Card.Title>
                            <Card.Text className='d-lg-flex d-md-flex  justify-content-between '>

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