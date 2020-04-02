import React, { Component, Fragment } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/aux';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] constructor...");
    this.state = {
      showPersons: false,
      persons: [
        { id: 'kunal1', name: "Kunal", age: 31 },
        { id: 'karan1', name: "Karan", age: 29 },
        { id: 'heer1', name: "Heer", age: "2" }
      ],
      showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps ", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount...");
  }

  /*componentWillMount() {
    console.log("[App.js] componentWillMount...");
  }*/

  nameChangeHandler = (event, id) => {
    //console.log(event, id);
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (index) => {
    //console.log("Deleted ", index);
    // const newPersons = personsState.persons.slice(); //Creates a new copy of array
    const newPersons = [...this.state.persons]; // Same as above modern approach.
    newPersons.splice(index, 1); // remove element from new array 
    this.setState({
      persons: newPersons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    console.log("[App.js] rendering...");
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />
      );
    } else {
      persons = null;
    }

    return (
        <Aux>
          <WithClass classes={classes.App}>
            <button onClick={() => {
                this.setState({
                  showCockpit: !this.state.showCockpit
                })
              }}>Show Cockpit</button>
            {this.state.showCockpit ? <Cockpit 
              title={this.props.appTitle} 
              toggle={this.togglePersonsHandler} 
              personsLength={this.state.persons.length} 
              showPersons={this.state.showPersons} />
            : null}
            {persons}
          </WithClass>
          <div><h1>test</h1></div>
        </Aux>
    );
  }
}

export default App;