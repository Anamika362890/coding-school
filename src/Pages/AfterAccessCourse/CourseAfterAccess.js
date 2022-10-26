import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CourseAfterAccess = () => {
    const courseAccess = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>{courseAccess[0].name}</h1>
            <h3>{user?.displayName}</h3>
            <h4>{user?.email}</h4>


            <img src={user?.photoURL} />


        </div>
    );
};

export default CourseAfterAccess;