import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCode, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }
    return (
        <div className=' p-5'>
            <Navbar className='fixed-top ' bg="light" expand="lg">
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


                            <NavLink >
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>

                                            <NavLink>
                                                {user?.photoURL ?
                                                    <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                                    :
                                                    <FaUser></FaUser>

                                                }
                                            </NavLink>
                                            <Button onClick={handleLogOut} variant="light" >Log out</Button>
                                        </>
                                        :
                                        <>
                                            <NavLink className='text-decoration-none me-5 ' to='/login'>Log in</NavLink>
                                            <NavLink className='text-decoration-none' to='/registration'>Register</NavLink>
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