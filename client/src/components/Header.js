import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Twitter Analytics</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/extra" className="dropdown-toggle">
                                    <i className="fa fa-home"></i> Fast food to Death
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/" className="dropdown-toggle">
                                    <i className="fa fa-home"></i> General Analysis
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Header;