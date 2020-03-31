import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

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

  const StyledButton = styled.button`
    background-color: ${props => { return props.showState? 'red':'green'}};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${props => { return props.showState? 'salmon':'lightgreen' }};
      color: black
    }
  `;
  

  var persons = null;
  let classes = [];

  if(personsState.persons.length <= 2) {
    classes.push('red');
  }
  if (personsState.persons.length <= 1) {
    classes.push('bold');
  }

  if(showState) {
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
      <div className="App">
        {/*Below is not recommended*/}
        <p className={classes.join(' ')}>Its working...</p>
        <StyledButton showState={showState} onClick={togglePersons} >Toggle Persons</StyledButton>
        {persons}
      </div>
  );
}

export default App;