import React, {Component} from 'react';
import './css/Chats.css'
class Chat extends Component {
    render() {
        const {text, is_user_msg} = this.props.message;
        return (
            <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
        );
    }
}

class Chats extends Component {
    render() {
        const {text, is_user_msg} = this.props.messages;
        return (
            <div className="Chats">
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        );
    }
}

export default Chats;
