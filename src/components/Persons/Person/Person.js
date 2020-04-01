import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {

    render() {
        console.log("[Person.js] rendering...");
        return (
            <div className={classes.Person}>
                <p onClick={this.props.onClick}>
                    I am {this.props.name} & I am {this.props.age} years old
                </p>
                
                <p>{this.props.children}</p>

                <input type="text" 
                    onChange={(event) => this.props.changed(event)} 
                    value={this.props.name} />
            </div>
        );
    }
};

export default Person;