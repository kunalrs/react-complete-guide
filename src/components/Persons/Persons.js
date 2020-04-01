import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate ", nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate ", prevProps, prevState);
        return null;
    }

    componentDidUpdate() {
        console.log("[Persons.js] compoenentDidUpdate");
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount...");
    }
    
    render() {
        console.log("[Persons.js] rendering...");
        return this.props.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person 
                    onClick={ () => this.props.clicked(index) }
                    changed = { (event) => this.props.changed(event, person.id) }
                    name={person.name}
                    age={person.age} />
            </ErrorBoundary>
        });
    }
}

export default Persons;