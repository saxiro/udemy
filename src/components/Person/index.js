import React from 'react';

const person = (props) => {
    const { name, age } = props;
    return (
        <p>I'm {name} and I am {age}</p>
    )
};

export default person;