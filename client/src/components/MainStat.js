import React, { Component } from 'react';
import CardStats from './card/CardStats';

class MainStat extends Component {

    render() {
        const { data } = this.props;
        if (data) {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <CardStats
                            backgroundColor="blue"
                            iconClass="fa-twitter"
                            category="Total Harvested Tweets"
                            title={data.data_size.toLocaleString()} />
                    </div>
                    <div className="col-md-3">
                        <CardStats
                            backgroundColor="blue"
                            iconClass="fa-twitter"
                            category="Total Tweets For Victoria Region"
                            title={data.tweet_size.toLocaleString()} />
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MainStat;