import React, {Component} from 'react';
import './css/ChatWindow.css';
import store from '../store';
import Header from '../components/ChatWindow/Header'
import Chats from "../components/ChatWindow/Chats";
import _ from "lodash";
import MessagesInput from "./MessagesInput";
class ChatWindow extends Component {
    render() {
        const state = store.getState();
        const activeUser = state.contacts[this.props.activeUserId];
        const activeMessages = state.messages[this.props.activeUserId]
        return (
            <div className="ChatWindow">
                <Header user={activeUser}/>
                <Chats messages={_.values(activeMessages)}/>
                <MessagesInput value={state.typing}/>
            </div>
        );
    }
}

export default ChatWindow;
