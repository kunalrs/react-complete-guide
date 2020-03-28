import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kunal", age: "31" },
      { name: "Karan", age: "29" },
      { name: "Heer", age:"2" }
    ]
  });

  const switchStateHandler = () => {
    setPersonsState({
      persons :[
        { name: "Kunal Sagar", age: "31" },
        { name: "Karan R Sagar", age: "29" },
        { name: "Heer K Sagar", age:"2" }
      ]
    })
  };

  return (
    <div className="App">
        <button onClick={switchStateHandler}>Switch Names</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
