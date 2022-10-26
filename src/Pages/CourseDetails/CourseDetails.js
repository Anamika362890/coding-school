import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courseinfo from './Courseinfo';


const CourseDetails = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1>Course Details {courses.length}</h1>

            {
                courses.map(course => <Courseinfo
                    key={course.id}
                    course={course}
                ></Courseinfo>)

            }


        </div>
    );
};

export default CourseDetails;