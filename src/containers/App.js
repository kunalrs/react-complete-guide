import React, { useState } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const App = (props) => {

  const [showState, setShowState] = useState(false);

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'kunal1', name: "Kunal", age: "31" },
      { id: 'karan1', name: "Karan", age: "29" },
      { id: 'heer1', name: "Heer", age:"2" }
    ]
  });

  const nameChangeHandler = (event, id) => {
    //console.log(event, id);
    const personIndex = personsState.persons.findIndex(p => p.id === id);
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [ ...personsState.persons ];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  }

  const deletePersonHandler = (index) => {
    //console.log("Deleted ", index);
    // const newPersons = personsState.persons.slice(); //Creates a new copy of array
    const newPersons = [...personsState.persons]; // Same as above modern approach.
    newPersons.splice(index, 1); // remove element from new array 
    setPersonsState({
      persons: newPersons
    })
  }

  const togglePersonsHandler = () => {
    setShowState(!showState);
  }

  var persons = null;
  let btnClass = '';

  if(showState) {
    persons = (
      <Persons 
        persons={personsState.persons} 
        clicked={deletePersonHandler} 
        changed={nameChangeHandler} />
    );
  } else {
    persons = null;
  }

  return (
      <div className={classes.App}>
        <Cockpit toggle={togglePersonsHandler} persons={personsState.persons} showState={showState} />
        {persons}
      </div>
  );
}

export default App;