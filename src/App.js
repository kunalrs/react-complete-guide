import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Kunal", age: "31" },
      { name: "Karan", age: "29" },
      { name: "Heer", age:"2" }
    ],
    otherState: "Some value"
  });

  console.log(personsState);

  const switchStateHandler = () => {
    setPersonsState({
      persons :[
        { name: "Kunal Sagar", age: "31" },
        { name: "Karan R Sagar", age: "29" },
        { name: "Heer K Sagar", age:"2" }
      ],
      // if you dont do this, the otherState will not be passed 
      // onto unlike class based state. 
      // Best practice is to use useState multiple times. 
      otherState: personsState.otherState
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
