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

  console.log(personsState, otherState);

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

  const togglePersons = () => {
    setShowState(!showState);
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  };

  return (
    <div className="App">
        {/*Below is not recommended*/}
        <button style={style} onClick={togglePersons} >Toggle Persons</button>
        { showState?
            <div>
              <Person
                // below is recommended!!!
                onClick={switchStateHandler.bind(this, 'Kunal Sagar...')}
                name={personsState.persons[0].name} 
                age={personsState.persons[0].age} />
              <Person 
                changed={nameChangeHandler}
                name={personsState.persons[1].name} 
                age={personsState.persons[1].age} />
              <Person 
                name={personsState.persons[2].name} 
                age={personsState.persons[2].age} />
            </div> : null
          }
    </div>
  );
}

export default App;
