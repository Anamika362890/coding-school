import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import pic3 from '../../Assest/cors.jpeg';
import pic2 from '../../Assest/firebase.png';
import pic1 from '../../Assest/images.png';
import pic4 from '../../Assest/porivate route.png';
import './Blog.css'



const Blog = () => {
    return (
        <div>
            <h1 className='blog-h' >Our Blog</h1>

            <Container>
                <Card className='p-2'>


                    <Card className='p-5 my-2 k '>

                        <Row className='align-items-center'>
                            <Col lg='4' >
                                <Image src={pic1}></Image>
                            </Col>



                            <Col lg='8'>

                                <h3>what is `cors`?</h3>
                                <p className='text'>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
                            </Col>
                        </Row>


                    </Card>
                    <Card className='p-5 my-2 '>

                        <Row>
                            <Col lg='4'>
                                <Image src={pic2}></Image>
                            </Col>
                            <Col lg='8'>
                                <h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                                <p className='text'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.</p>
                            </Col>
                        </Row>


                    </Card>
                    <Card className='p-5 my-2'>
                        <Row>
                            <Col lg='4'>
                                <Image src={pic3}></Image>
                            </Col>
                            <Col lg='8'>
                                <h3>How does the private route work?</h3>
                                <p className='text'>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is used to protect selected pages in a React app from unauthenticated users.</p>
                            </Col>
                        </Row>


                    </Card>
                    <Card className='p-5 my-2'>
                        <Row>
                            <Col className='t' lg='4'>
                                <Image src={pic4}></Image>
                            </Col>
                            <Col lg='8'>
                                <h3>What is Node? How does Node work?</h3>
                                <p className='text'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                            </Col>
                        </Row>


                    </Card>
                </Card>

            </Container >
        </div >
    );
};

export default Blog;