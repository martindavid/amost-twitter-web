import React, { Component } from 'react';
import { Link } from "react-router";

class Menu extends Component {

    render() {
        let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "active-menu" : "";

        return (
            <li className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

Menu.contextTypes = {
    router: React.PropTypes.object
}

export default Menu;