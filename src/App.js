import React, { Component } from 'react';
import Button from './components/Button'
import styled from 'styled-components'
import { Input } from './components/Input'
import { ClearButton } from './components/ClearButton'
import * as math from 'mathjs'

const AppMainDiv = styled.div `
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.calc-wrapper {
  width: 448px;
  height: 600px;
}

.row {
  display: flex;
  width: 100%;
}
`

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: ""
    }
  }

  totalInput = val => {
    this.setState({input: this.state.input + val })
  }

  totalUpEquation = () => {
    this.setState({input: math.eval(this.state.input)})
  }

  percent = () => {
   this.setState({input: this.state.input * 100 + "%" }) 
  }

  sqrRt = () => {
    this.setState({input: math.sqrt(this.state.input) })
  }
  
  backspace = () => {
    this.setState({ input: this.state.input.substr(0, this.state.input.length - 1)})
  }

  render() {
    return (
      <AppMainDiv>
        <div className="app">
        <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.totalInput}>7</Button>
            <Button handleClick={this.totalInput}>8</Button>
            <Button handleClick={this.totalInput}>9</Button>
            <Button handleClick={this.totalInput}>/</Button>
            <Button handleClick={this.backspace}>←</Button>
          </div>
          <div className="row">
            <Button handleClick={this.totalInput}>4</Button>
            <Button handleClick={this.totalInput}>5</Button>
            <Button handleClick={this.totalInput}>6</Button>
            <Button handleClick={this.totalInput}>*</Button>
            <Button handleClick={this.sqrRt}>√</Button>
          </div>
          <div className="row">
            <Button handleClick={this.totalInput}>3</Button>
            <Button handleClick={this.totalInput}>2</Button>
            <Button handleClick={this.totalInput}>1</Button>
            <Button handleClick={this.totalInput}>-</Button>
            <Button handleClick={this.percent}>%</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: ""})}>C</ClearButton>
            <Button handleClick={this.totalInput}>0</Button>
            <Button handleClick={this.totalInput}>.</Button>
            <Button handleClick={this.totalInput}>+</Button>
            <Button handleClick={this.totalUpEquation}>=</Button>
          </div>
          
            
        </div>
        </div>
      </AppMainDiv>
    );
  }
}

export default App;
