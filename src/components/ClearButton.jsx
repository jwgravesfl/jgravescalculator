import React from 'react'

import styled from 'styled-components'

const ClearButtonDiv = styled.div `
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


export const ClearButton = props => (
    <ClearButtonDiv>
    <div onClick={props.handleClear} className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    >
        {props.children}
    </div>
    </ClearButtonDiv>
)