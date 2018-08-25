import React from 'react'

import styled from 'styled-components'

const InputDiv = styled.div `
    .input {
        height: 4em;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-weight: bold;
        font-size: 1.4em;
        background-color: #000000;
        color: #ffffff;
        padding: 0.5em;
        outline: 1px solid #888888;
    }
`

export const Input = props =>
    <InputDiv>
        <div className="input">
            {props.input}
        </div>
    </InputDiv>