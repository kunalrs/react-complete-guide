import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    useEffect(() => {
        console.log("[Cockpit.js] useEffect...");
        console.log("[Cockpit.js] this will run only once because additional array passed is []");

        // This will run once after render is called, can be used for Cleanup
        return () => {
            console.log("[Cockpit.js cleanup once...");
        };
    }, []);

    

    let textClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personslength <= 2) {
        textClasses.push(classes.red);
    }
    if (props.personslength <= 1) {
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

export default React.memo(Cockpit);