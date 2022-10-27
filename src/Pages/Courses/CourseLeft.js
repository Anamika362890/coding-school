import React, { useEffect, useState } from 'react';

import Card from './Card';
import './Courses.css'

const CourseLeft = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className='title'>Here Our All Courses</h1>
            <div className='courses-Container'>
                {
                    courses.map(course => <Card
                        key={course.id}
                        course={course}
                    ></Card>
                    )
                }
            </div>
        </div>
    );
};

export default CourseLeft;