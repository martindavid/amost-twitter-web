import React, { Component } from 'react';
import CardStats from './card/CardStats';

class MainStat extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <CardStats
                        backgroundColor="orange"
                        iconClass="fa-calendar"
                        category="Revenue"
                        title="$40,000" />
                </div>
                <div className="col-md-4">
                    <CardStats
                        backgroundColor="blue"
                        iconClass="fa-clone"
                        category="Revenue"
                        title="$40,000" />
                </div>
                <div className="col-md-4">
                    <CardStats
                        backgroundColor="red"
                        iconClass="fa-shopping-cart"
                        category="Revenue"
                        title="$40,000" />
                </div>
            </div>
        );
    }
}

export default MainStat;