import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeftDrawer extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Twitter Analytics
				</a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="active">
                            <a href="dashboard.html">
                                <i className="fa fa-home"></i>
                                <p>Death by fast food</p>
                            </a>
                        </li>
                        <li>
                            <a href="dashboard.html">
                                <i className="fa fa-dashboard"></i>
                                <p>Victorian Tweets</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LeftDrawer;