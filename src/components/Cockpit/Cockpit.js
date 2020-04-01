import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    let textClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
        textClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        textClasses.push(classes.bold);
    }

    console.log("[Cockpit.js] rendering...");
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={textClasses.join(' ')}>Its working...</p>
            <button 
                className={btnClass} 
                onClick={() => props.toggle()} >Toggle Persons
            </button>
        </div>
    );
};

export default Cockpit;