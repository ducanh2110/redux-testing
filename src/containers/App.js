import React, {Component} from 'react';
import './css/App.css';
import store from '../store'
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import _ from 'lodash';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {contacts, user, activeUserId, messages} = store.getState();

        return (
      <div className="App">
          <SideBar contacts={_.values(contacts)}/>
          <Main user={user} activeUserId={activeUserId} messages={messages}/>
      </div>
    );
  }
}

export default App;
