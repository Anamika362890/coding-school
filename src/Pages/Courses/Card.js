import React from 'react';

const Card = ({ course }) => {
    const { name, } = course;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Card;