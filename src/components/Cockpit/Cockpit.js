import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    let textClasses = [];
    let btnClass = '';

    if(props.showState) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
        textClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        textClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={textClasses.join(' ')}>Its working...</p>
            <button 
                className={btnClass} 
                showState={props.showState} 
                onClick={() => props.toggle()} >Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;