import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courseinfo from './Courseinfo';


const CourseDetails = () => {
    const courses = useLoaderData();
    return (
        <div>


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