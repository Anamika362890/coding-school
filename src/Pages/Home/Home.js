import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink, useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Coursesright from '../Courses/Coursesright ';
import CoursesDemo from './CoursesDemo/CoursesDemo';
import "./Home.css"


const Home = () => {
    const courses = useLoaderData();




    return (
        <div className='App'>
            <h1 className='title'>Here is Our Popular {courses.length} Courses</h1>

            <div className='courses container' >

                {
                    courses.map(course => <CoursesDemo
                        key={course.id}
                        course={course}
                    ></CoursesDemo>


                    )
                }






            </div>

            <div className='m-5 center'>
                <NavLink to='/courses'> <button className='button2'>Click Here To See All Courses
                    <FaArrowRight className='ms-1'></FaArrowRight>
                </button></NavLink>
            </div>



        </div>
    );
};

export default Home;