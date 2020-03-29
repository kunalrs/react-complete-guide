import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [showState, setShowState] = useState(false);

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kunal", age: "31" },
      { name: "Karan", age: "29" },
      { name: "Heer", age:"2" }
    ]
  });

  const [otherState, setOtherState] = useState("this is some value");

  console.log(personsState, otherState, showState);

  const switchStateHandler = (newName) => {
    setPersonsState({
      persons :[
        { name: newName, age: "31" },
        { name: "Karan R Sagar", age: "29" },
        { name: "Heer K Sagar", age:"2" }
      ]
    });
  };

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons:[
        { name: "Kunal", age: "31" },
        { name: event.target.value, age: "29" },
        { name: "Heer K Sagar", age:"2" }
      ]
    });
  }

  const deletePersonHandler = (index) => {
    console.log("Deleted ", index);
    const newPersons = personsState.persons;
    newPersons.splice(index, 1);
    setPersonsState({
      persons: newPersons
    })
  }

  const togglePersons = () => {
    setShowState(!showState);
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  };

  var persons = null;

  if(showState) {
    persons = (
      <div>{ 
        personsState.persons.map( (person, index) => {
          return <Person 
                    onClick={deletePersonHandler.bind(this, index)}
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
        <button style={style} onClick={togglePersons} >Toggle Persons</button>
        {persons}
    </div>
  );
}

export default App;