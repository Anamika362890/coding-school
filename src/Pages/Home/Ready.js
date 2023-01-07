import React from 'react';
import { NavLink } from 'react-bootstrap';
import "../Home/Banner.css"

const Ready = () => {
    return (
        <div className=''>
            <div className='d-flex justify-content-around  nav py-5 my-5 px-5 text-white'>
                <div>
                    <h1>Are You Ready To Join?</h1>
                    <p>For join or community registration first and add to our community group</p>
                </div>
                <div>
                    <NavLink to='/registration' className='text-decoration-none'>
                        <button className='button '> Register</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Ready;