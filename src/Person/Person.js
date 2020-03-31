import React from 'react';
import classes from './Person.module.css';

const person = (props) => {

    const rnd = Math.random();
    if(rnd > 0.70) {
        throw new Error("Something went wrong");
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.onClick} >I am {props.name} & I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event) => props.changed(event)} value={props.name} />
        </div>
    );
};

export default person;