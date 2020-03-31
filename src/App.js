import React, { useState } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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

  const togglePersons = () => {
    setShowState(!showState);
  }

  var persons = null;
  let textClasses = [];

  if(personsState.persons.length <= 2) {
    textClasses.push(classes.red);
  }
  if (personsState.persons.length <= 1) {
    textClasses.push(classes.bold);
  }

  let btnClass = '';

  if(showState) {
    btnClass = classes.Red;
    persons = (
      <div>{
        personsState.persons.map( (person, index) => {
          return <Person 
                    onClick={ () => deletePersonHandler(index) }
                    changed = { (event) => nameChangeHandler(event, person.id)}
                    key={person.id}
                    name={person.name}
                    age={person.age} />
        })
      }</div>
    );
  } else {
    persons = null;
  }

  return (
      <div className={classes.App}>
        {/*Below is not recommended*/}
        <p className={textClasses.join(' ')}>Its working...</p>
        <button className={btnClass} showState={showState} onClick={togglePersons} >Toggle Persons</button>
        {persons}
      </div>
  );
}

export default App;