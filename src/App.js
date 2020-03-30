import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

const App = (props) => {

  const [showState, setShowState] = useState(false);

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 'kunal1', name: "Kunal", age: "31" },
      { id: 'karan1', name: "Karan", age: "29" },
      { id: 'heer1', name: "Heer", age:"2" }
    ]
  });

  const [otherState, setOtherState] = useState("this is some value");

  //console.log(personsState, otherState, showState);

  const switchStateHandler = (newName) => {
    setPersonsState({
      persons :[
        { name: newName, age: "31" },
        { name: "Karan R Sagar", age: "29" },
        { name: "Heer K Sagar", age:"2" }
      ]
    });
  };

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

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  var persons = null;
  let classes = [];

  if(personsState.persons.length <= 2) {
    classes.push('red');
  }
  if (personsState.persons.length <= 1) {
    classes.push('bold');
  }

  if(showState) {

    // If persons are visible change background color of button to red.  
    style.backgroundColor = 'red'
    
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }

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
    <StyleRoot>
      <div className="App">
        {/*Below is not recommended*/}
        <p className={classes.join(' ')}>Its working...</p>
        <button style={style} onClick={togglePersons} >Toggle Persons</button>
        {persons}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);