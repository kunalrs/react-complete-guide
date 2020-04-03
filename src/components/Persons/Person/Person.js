import React, { Component } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import aux from '../../../hoc/aux';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            <aux>
                {this.props.isAuthenticated ? <p>Authenticated</p> : <p>Please Login!</p>}
                <div className={classes.Person}>
                    <p onClick={this.props.onClick}>
                        I am {this.props.name} & I am {this.props.age} years old
                    </p>
                    
                    <p>{this.props.children}</p>

                    <input type="text" 
                        ref={this.inputElementRef}
                        onChange={(event) => this.props.changed(event)} 
                        value={this.props.name} />
                </div>
            </aux>
        );
    }
}

Person.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    isAuthenticated: PropTypes.bool
};

export default Person;