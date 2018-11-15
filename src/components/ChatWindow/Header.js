import React, {Component} from 'react';
import './css/Header.css';
import  {getMessages} from "../../static-data";

class Header extends Component {
    render() {
        const {name, status} = this.props.user;
        return (
            <header className="Header">
                <h1 className="Header__name">{name}</h1>
                <p className="Header__status">{status}</p>
            </header>
        );
    }
}

export default Header;
