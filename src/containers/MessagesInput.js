import React, {Component} from 'react';
import store from '../store';
import {setTypingValue, sendMessage} from "../actions";
import './css/MessageInput.css'
class MessagesInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        store.dispatch(setTypingValue(e.target.value))
    }
    handleSubmit(e) {
        const state = store.getState();
        const {typing, activeUserId} = state;
        e.preventDefault();
        store.dispatch(sendMessage(typing, activeUserId));
    }
    render() {
        return (
            <form className="Message" onSubmit={this.handleSubmit}>
                <input
                    className="Message__input"
                    onChange={this.handleChange}
                    value={this.props.value}
                    placeholder="write a message"
                />
            </form>
        );
    }
}

export default MessagesInput;