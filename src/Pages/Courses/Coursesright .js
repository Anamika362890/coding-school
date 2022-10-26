import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Coursesright = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='position-fixed'>

            <h4>All Category {courses.length}</h4>
            <div>
                {
                    courses.map(course => <h5 key={course.id}>

                        <Link to={`/courses/${course.id}`} >{course.name}</Link>
                    </h5>)
                }

            </div>

        </div>
    );
};
export default Coursesright;