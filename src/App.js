import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "Hello World",
      condition: true
    }
  }

  toggleState() {
    if(this.state.condition) {
      this.setState({
        text: "Hello Pakistan",
        condition: false
      })
    } else {
      this.setState({
        text: "Hello World",
        condition: true
      })
    }

    
  }
  
  render() {
    return (
      <div className="App">
        <h1>Text from State in green,click on it to toggle it</h1>
        <h2 onClick={ _ => this.toggleState() } style={{color: 'green'}}>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
