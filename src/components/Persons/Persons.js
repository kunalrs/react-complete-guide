import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Persons = (props) => props.persons.map( (person, index) => 
    <ErrorBoundary key={person.id}>
        <Person 
            onClick={ () => props.clicked(index) }
            changed = { (event) => props.changed(event, person.id) }
            name={person.name}
            age={person.age} />
    </ErrorBoundary>
);

export default Persons;