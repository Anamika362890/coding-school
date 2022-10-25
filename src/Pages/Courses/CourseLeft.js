import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const CourseLeft = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>left nav</h1>
            {
                courses.map(course => <Card
                    key={course.id}
                    course={course}
                ></Card>
                )
            }
        </div>
    );
};

export default CourseLeft;