import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const context = useContext(AuthContext);
    
    console.log("Context ", context);

    useEffect(() => {
        toggleButtonRef.current.click();
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
                ref={toggleButtonRef}
                className={btnClass} 
                onClick={() => props.toggle()} >Toggle Persons
            </button>

            <button onClick={context.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);