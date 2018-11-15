import React, {Component} from 'react';
import './css/SideBar.css'
import User from "../containers/User";
class SideBar extends Component {
    render() {
        return (
            <aside className="Sidebar">
                {this.props.contacts.map((contact) => <User user={contact} key={contact.user_id}/> )}
            </aside>
        );
    }
}

export default SideBar;
