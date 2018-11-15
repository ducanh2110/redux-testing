import React, {Component} from 'react';
import './css/Main.css'
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";
class Main extends Component {
    constructor(props) {
        super(props);
    }

    renderMainContent() {
        if(!this.props.activeUserId) {
            return (<Empty user={this.props.user} activeUserId={this.props.activeUserId} />);
        } else {
            return (<ChatWindow activeUserId={this.props.activeUserId} />)
        }
    }
    render() {
        return (
            <main className="Main">
                {this.renderMainContent()}
            </main>
        );
    }
}

export default Main;
