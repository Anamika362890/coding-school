import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCode, FaMoon, FaSun } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';



const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#" className='d-flex '>
                        <h3 className='me-3'> <FaCode></FaCode></h3>
                        <h3>Coding School</h3>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <div className="me-auto ms-auto my-2 my-lg-0   h5"
                            style={{ maxHeight: '600px' }}>
                            <NavLink className='text-decoration-none me-5' to='/'>Home</NavLink>

                            <NavLink className='text-decoration-none me-5' to='/courses'>Courses</NavLink>

                            <NavLink className='text-decoration-none me-5' to='/faq'>FAQ</NavLink>
                            <NavLink className='text-decoration-none' to='/blog'>Blog</NavLink>


                        </div>


                        <div className='h5'>
                            <NavLink className='text-decoration-none me-5 ' to='/login'>Log in</NavLink>
                            <NavLink className='text-decoration-none' to='/registration'>Register</NavLink>
                        </div>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;