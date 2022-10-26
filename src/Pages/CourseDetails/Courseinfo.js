import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseAfterAccess from '../AfterAccessCourse/CourseAfterAccess';

const Courseinfo = ({ course }) => {

    const { name, img, price, details, id } = course;
    return (
        <div>

            <h1>{name}</h1>
            <p>{details}</p>
            <Link to={`/course-access/${id}`}>
                <Button variant="primary">Get Premium Access</Button>

            </Link>

        </div>
    );
};

export default Courseinfo;