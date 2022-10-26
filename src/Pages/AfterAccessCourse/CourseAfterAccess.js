import React, { useContext } from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";





const CourseAfterAccess = () => {
    const ref = React.createRef();
    const courseAccess = useLoaderData();
    console.log(courseAccess);
    const { user } = useContext(AuthContext);


    const options = {
        orientation: 'landscape',
    };
    return (




        <div>
            <Container>
                <Card>

                    <div >
                        <Pdf options={options} targetRef={ref} filename="course.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
                        </Pdf>

                        <div className='d-flex justify-content-around m-5'>
                            <div>
                                <Image className='m-5' src={user?.photoURL}></Image>
                                <h1>{user?.displayName}</h1>
                                <h5>{user?.email}</h5>
                            </div>
                            <div className='p-5' style={{ width: 800, height: 450, background: 'blue' }} ref={ref}>
                                <h1>Course Id:{courseAccess[0].id}</h1>
                                <h2>Course Name:{courseAccess[0].name}</h2>

                                <p>{courseAccess[0].details}</p>
                                <p>Price:{courseAccess[0].price}</p>
                                <p>Duration:{courseAccess[0].duration}</p>
                            </div>
                        </div>

                    </div>


                </Card>
            </Container>

        </div>
    );
};

export default CourseAfterAccess;