import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Coursesright = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {

        fetch('https://coding-school-server-one.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='left'>

            <h4 className='mt-5  pt-5 login'>Click Here To See Details</h4>
            <div className='coursename' >
                {
                    courses.map(course => <h5 key={course.id}>

                        <Link to={`/courses/${course.id}`} ><button className='button3'>{course.name}</button></Link>
                    </h5>)
                }

            </div>

        </div>
    );
};
export default Coursesright;