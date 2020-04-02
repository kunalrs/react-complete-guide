import React, { Component } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';

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
}

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;