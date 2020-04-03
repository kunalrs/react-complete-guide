import React, { Component } from 'react';
import classes from './Person.module.css';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/aux';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            <Aux>
                <div className={classes.Person}>
    
                    { this.context.authenticated ? <p>Authenticated</p> : <p>Please Login!</p> }
                
                    <p onClick={this.props.onClick}>
                        I am {this.props.name} & I am {this.props.age} years old
                    </p>
                    
                    <p>{this.props.children}</p>

                    <input type="text" 
                        ref={this.inputElementRef}
                        onChange={(event) => this.props.changed(event)} 
                        value={this.props.name} />
                </div>
            </Aux>
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