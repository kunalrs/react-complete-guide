import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
        width: 60%;
        margin: 10px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width: 500px): {
            width: '450px'
        }
`;

const person = (props) => {

    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.onClick} >I am {props.name} & I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={(event) => props.changed(event)} value={props.name} />
        </StyledDiv>
    );
};

export default person;