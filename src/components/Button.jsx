import React from 'react'

import styled from 'styled-components'


const ButtonMainDiv = styled.div `
.button-wrapper {
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    font-size: 1.4em;
    background-color: #e0e1e6;
    color: #888888;
    flex: 1;
    outline: 1px solid #888888;
    width: 4em;
  }
  
  .operator {
    background-color: #fe9241;
    color: #ffffff;
  }
`

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "="
}

const Button = props => (
    <ButtonMainDiv>
     <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
    </ButtonMainDiv>
)

export default Button