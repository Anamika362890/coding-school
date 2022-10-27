import React, { useContext } from 'react';
import { Button, Card, Container, Image, NavLink } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaArrowRight } from 'react-icons/fa';






const CourseAfterAccess = () => {

    const courseAccess = useLoaderData();
    console.log(courseAccess);
    const { user } = useContext(AuthContext);


    return (




        <div>
            <Container>
                <Card>

                    <div className='d-lg-flex justify-content-around'>
                        <div >
                            <h1 className='title'>User Information:</h1>
                            <Image className='m-5' src={user?.photoURL}></Image>
                            <h1 className='center'>{user?.displayName}</h1>
                            <h5 className='center'>{user?.email}</h5>
                        </div>
                        <div>
                            <h1 className='title text-center p-5'>Course Information :</h1>
                            <h1 className='p-5'>Course Id:{courseAccess[0].id}</h1>
                            <h2 className='p-5'>Course Name:{courseAccess[0].name}</h2>
                        </div>

                    </div>

                </Card>
            </Container>

        </div>
    );
};

export default CourseAfterAccess;