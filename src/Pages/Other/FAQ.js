import React from 'react';
import { Accordion, NavLink } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {

    return (
        <div>
            <h1 className='title'>Do You Have Any Question?</h1>
            <Accordion className='p-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h2>What courses are there?</h2></Accordion.Header>
                    <Accordion.Body>
                        Here you find C,C++,Java,PHP,HTML,CSS,SQL,Phython
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h2>How Can Purchase A Course?</h2></Accordion.Header>
                    <Accordion.Body>
                        For Purchasing you must be Registration first,Then log in to account and find your favorite course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header ><h2>What is Programming?</h2></Accordion.Header>
                    <Accordion.Body>
                        Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header ><h2>Is Programming Hard?</h2></Accordion.Header>
                    <Accordion.Body>
                        Programming has a reputation for being one of the most difficult disciplines to master. Considering how different it is from traditional forms of education, including college degrees in computer science, it's not hard to see why some people have difficulty learning how to code.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header ><h2> How does programming work?</h2></Accordion.Header>
                    <Accordion.Body>
                        Programming contains a set of instructions for the computer to perform different tasks. In fact, those instructions are executable commands, each having a different purpose.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header ><h2> Name different types of errors which can occur during the execution of a program?</h2></Accordion.Header>
                    <Accordion.Body>
                        There are three types of errors which can occur during the execution of a program.There are:Syntax Errors,Runtime Errors,
                        Logical errors.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>



        </div >
    );
};

export default FAQ;