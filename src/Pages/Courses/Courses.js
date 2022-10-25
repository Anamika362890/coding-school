import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseLeft from './CourseLeft';
import Coursesright from './Coursesright ';


const Courses = () => {


    return (
        <Container>
            <Row >

                <Col lg='2'>
                    <h2>
                        <Coursesright></Coursesright>
                    </h2>
                </Col>
                <Col lg='10'>
                    <CourseLeft></CourseLeft>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;