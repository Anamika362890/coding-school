import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseLeft from './CourseLeft';
import Coursesright from './Coursesright ';
import './Courses.css'
import Banner from '../Home/Banner';


const Courses = () => {


    return (

        <Container>
            <Row  >
                <Col lg='3' sm='10' md='5' >
                    <Coursesright></Coursesright>
                </Col>
                <Col lg='9' sm='2' md='7'>
                    <CourseLeft></CourseLeft>
                </Col>
            </Row>

        </Container>




    );
};

export default Courses;