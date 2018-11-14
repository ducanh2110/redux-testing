import React, {Component} from 'react';
import {store} from "../store";
import {setTechnology} from "../actions";

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.dispatchBtnAction = this.dispatchBtnAction.bind(this);
    }

    dispatchBtnAction(e) {
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech))
    }

    render() {
        return (
            <div>
                {this.props.technologies.map((tech) => (
                    <button
                        data-tech={tech}
                        key={tech}
                        onClick={this.dispatchBtnAction}
                    >{tech}</button>
                ))}
            </div>
        );
    }

}

export default ButtonGroup;
