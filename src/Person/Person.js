import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.onClick} >I am {props.name} & I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event) => props.changed(event)} value={props.name} />
        </div>
    );
};

export default person;