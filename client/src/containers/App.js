import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

class App extends Component {

  constructor() {
    super();
    this.handleChangeRequestNavDrawer = () =>
      this.props.onDrawerClick(!this.props.isDrawerOpen);
  }

  render() {
    return (
        <div className="wrapper">
          <div className="main-panel">
            <Header />
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
