import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import {store} from './store'
import ButtonGroup from "./components/ButtonGroup";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let state = store.getState();

        return (
      <div className="App">
          <SideBar/>
          <Main/>
      </div>
    );
  }
}

export default App;
