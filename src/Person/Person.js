import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person" onClick={props.onClick}>
            <p>I am {props.name} & I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;