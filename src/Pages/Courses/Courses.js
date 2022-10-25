import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseLeft from './CourseLeft';
import Coursesright from './Coursesright ';


const Courses = () => {


    return (
        <Container>
            <Row>
                <Col lg='7'>
                    <CourseLeft></CourseLeft>
                </Col>
                <Col lg='5'>
                    <h2>
                        <Coursesright></Coursesright>
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;