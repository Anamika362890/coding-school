import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseLeft from './CourseLeft';
import Coursesright from './Coursesright ';
import './Courses.css'


const Courses = () => {


    return (

        <Container>
            <Row  >
                <Col lg='3' sm='6' md='5' >
                    <Coursesright></Coursesright>
                </Col>
                <Col lg='9' sm='6' md='7'>
                    <CourseLeft></CourseLeft>
                </Col>
            </Row>
        </Container>




    );
};

export default Courses;