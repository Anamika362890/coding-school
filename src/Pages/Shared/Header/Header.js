import React, { useContext, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaCode, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css';
import '../.././darkmoon.css'
import '../../../App.css'




const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {


            })
            .catch(error => console.error(error))
    }

    const [show, setShow] = useState(true);


    return (
        <div className=' p-5 mb-5'>

            <Navbar className='fixed-top nav ' expand="lg">
                <Container >
                    <Navbar.Brand href="#" className='d-flex text-white mt-2 '>
                        <h3 className='me-3 icon '> <FaCode></FaCode></h3>
                        <h3 className='mt-3'>Coding School</h3>
                    </Navbar.Brand>



                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <div className="me-auto ms-auto my-2 my-lg-0 navlink "
                            style={{ maxHeight: '600px' }}>

                            <NavLink className='text-decoration-none  me-5 ' to='/'>Home</NavLink>

                            <NavLink className='text-decoration-none me-5' to='/courses'>Courses</NavLink>

                            <NavLink className='text-decoration-none me-5' to='/faq'>FAQ</NavLink>
                            <NavLink className='text-decoration-none' to='/blog'>Blog</NavLink>


                        </div>
                        <div className='mt-1 mx-5 px-5 text-white'>
                            {
                                show ? <h4 ><FaMoon onClick={() => setShow(!show)}  ></FaMoon>
                                    <span className='ms-3'> Dark Mode</span></h4> : <h4><FaSun onClick={() => setShow(!show)} ></FaSun>
                                    <span className='ms-3'> Light Mode</span></h4>
                            }
                        </div>



                        <div className='h5'>


                            <NavLink >
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>



                                            <NavLink className='text-decoration-none text-white m-3' data-toggle="tooltip" title={user?.displayName}>
                                                {user?.photoURL ?
                                                    <Image style={{ height: '50px' }} roundedCircle src={user?.photoURL}></Image>
                                                    :
                                                    <FaUser></FaUser>

                                                }
                                            </NavLink>
                                            <button className='button' onClick={handleLogOut} >Log out</button>
                                        </>
                                        :
                                        <>

                                            <NavLink to='/login' className='text-decoration-none me-3'>
                                                <button className='button '> Log in</button>
                                            </NavLink>
                                            <NavLink to='/registration' className='text-decoration-none'>
                                                <button className='button '> Register</button>
                                            </NavLink>





                                        </>
                                }
                            </NavLink>





                        </div>



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;