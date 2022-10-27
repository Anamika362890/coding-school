import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseAfterAccess from '../AfterAccessCourse/CourseAfterAccess';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import './CourseInfo.css'




const Courseinfo = ({ course }) => {
    const ref = React.createRef();

    const { name, img, price, details, id, duration } = course;
    return (
        <div>


            <Container>
                <Card>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h1 className='mx-4'>{name}</h1>

                        </div>
                        <div className='mb-2 mx-4' >
                            <Pdf targetRef={ref} filename="course.pdf">
                                {({ toPdf }) => <button className='button2' onClick={toPdf}>Download Pdf</button>}
                            </Pdf>


                        </div>
                    </div>
                    <div ref={ref}>

                        <Card className='card1' >
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='my-4 '>Course Name: {name}</Card.Title>
                                <Card.Text className='text '>
                                    {details}
                                </Card.Text>

                                <h6>Time: {duration}</h6>
                                <h6>Price: {price} TK</h6>


                            </Card.Body>
                        </Card>

                    </div>
                    <div className='text-center m-4'>
                        <Link to={`/course-access/${id}`}>
                            <button className='button2'>Get Premium Access</button>

                        </Link>
                    </div>


                </Card>
            </Container>



        </div >
    );
};

export default Courseinfo;