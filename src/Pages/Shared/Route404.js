import React from 'react';
import { Image } from 'react-bootstrap';
import pic from '../../Assest/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.webp'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Route404 = () => {
    return (
        <div>

            <Card.Img className='w-50 img-fluid ' variant="top" src={pic} />
            <Card.Body>
                <Card.Text className='mt-5 ms-5 p-5'>
                    <h1>No result found</h1>
                    <p>We could not find what are you searching!!</p>
                    <p>Please Try Again Or  <NavLink to='/'><button>Back To Home</button></NavLink> </p>
                </Card.Text>
            </Card.Body>






        </div>

    );
};

export default Route404;