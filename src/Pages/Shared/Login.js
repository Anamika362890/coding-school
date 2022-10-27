import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const { providerLogin, logIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')



            })
            .catch(error => console.error(error))

    }

    const handleGithubLogin = () => {
        providerLogin(githubProvider)
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
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            }
            )
    }
    return (
        <div>
            <h1 className='welcome'>Welcome Back</h1>
            <p className='nice'>Nice to see you again</p>
            <h3 className='login'>Log in your account</h3>


            <Container>
                <div className='form'>
                    <Container>
                        <Form onSubmit={handleSubmit}>
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
                                Log in
                            </button>
                            <p className='mt-3'>New Here?Create a New account using <Link to='/registration'>Register</Link> </p>
                        </Form>
                        <div className='text-center'>
                            <h5>Log in with</h5>

                            <button className='me-2 btn-social text-danger' onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>


                            <button className='btn-social' onClick={handleGithubLogin}>
                                <FaGithub></FaGithub></button>


                        </div>
                    </Container>
                </div>
            </Container>

        </div>
    );
};

export default Login;