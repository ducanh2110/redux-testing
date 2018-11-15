import React, {Component} from 'react';
import './css/ChatWindow.css';
import store from '../store';
import Header from '../components/ChatWindow/Header'
import Chats from "../components/ChatWindow/Chats";
import _ from "lodash";
class ChatWindow extends Component {
    render() {
        const state = store.getState();
        const activeUser = state.contacts[this.props.activeUserId];
        const activeMessages = state.messages[this.props.activeUserId]
        return (
            <div className="ChatWindow">
                <Header user={activeUser}/>
                <Chats messages={_.values(activeMessages)}/>
                Conversation for user: {this.props.activeUserId}
            </div>
        );
    }
}

export default ChatWindow;
