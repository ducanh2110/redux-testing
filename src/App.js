import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import {store} from './store'
import ButtonGroup from "./components/ButtonGroup";
class App extends Component {
    constructor(props) {
        super(props);
    }
    state = store.getState();

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <HelloWorld tech={this.state.text}/>

            <ButtonGroup technologies={['React', 'Elm', 'Redux']}/>

            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
