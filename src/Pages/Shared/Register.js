import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './loginReg.css'


const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name, photoURL);
                console.log(user);

                setError('');
                form.reset();
                navigate('/')




            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }

            )


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h1 className='title'>Create a new account</h1>
            <Container>
                <div className='form'>
                    <Container>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="name" name='name' placeholder="Enter your name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="photoUrl" name='photoURL' placeholder="Photo URL" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter your email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Enter your password" required />
                            </Form.Group>
                            <p className='text-danger'>{error}</p>

                            <button className='button2' type="submit">
                                Register
                            </button>
                        </Form>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default Register;