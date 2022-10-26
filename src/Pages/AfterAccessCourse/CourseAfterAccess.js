import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";





const CourseAfterAccess = () => {
    const ref = React.createRef();
    const courseAccess = useLoaderData();
    const { user } = useContext(AuthContext);



    return (
        <div>
            <Button>Download</Button>
            <h1>{courseAccess[0].name}</h1>
            <h3>{user?.displayName}</h3>
            <h4>{user?.email}</h4>


            <img src={user?.photoURL} />

            <div className="App">
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div ref={ref}>
                    <h1>{courseAccess[0].name}</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
            </div>




        </div>
    );
};

export default CourseAfterAccess;