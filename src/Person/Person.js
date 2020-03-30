import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.onClick} >I am {props.name} & I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event) => props.changed(event)} value={props.name} />
        </div>
    );
};

export default Radium(person);