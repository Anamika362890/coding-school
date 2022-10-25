import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import CoursesDemo from './CoursesDemo/CoursesDemo';
import "./Home.css"


const Home = () => {
    const courses = useLoaderData();




    return (
        <div>
            <h1>Here is Our {courses.length} courses</h1>

            <div className='courses container' >

                {
                    courses.map(course => <CoursesDemo
                        key={course.id}
                        course={course}
                    ></CoursesDemo>)
                }
            </div>

            <div className='m-5'>
                <NavLink to='/courses'> <button >Click Here To See All Courses</button></NavLink>
            </div>



        </div>
    );
};

export default Home;