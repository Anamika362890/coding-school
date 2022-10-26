import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const { providerLogin, logIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')


            })
            .catch(error => console.error(error))

    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }
            )
    }
    return (
        <div>
            <h1>Welcome Back</h1>
            <p>Nice to see you again</p>
            <h3>Log in your account</h3>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>{error}</p>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <p>New Here?Create a New account using <Link to='/registration'>Register</Link> </p>
            </Form>
            <div>
                <h5>Log in with</h5>

                <Button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></Button>

                <FaGithub></FaGithub>

            </div>
        </div>
    );
};

export default Login;