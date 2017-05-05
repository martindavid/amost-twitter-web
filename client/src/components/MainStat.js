import React, { Component } from 'react';
import CardStats from './card/CardStats';

class MainStat extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <CardStats
                        backgroundColor="blue"
                        iconClass="fa-twitter"
                        category="Number of Tweets"
                        title="850" />
                </div>
            </div>
        );
    }
}

export default MainStat;