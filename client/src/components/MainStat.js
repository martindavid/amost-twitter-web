import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStats from './card/CardStats';
import CardStatsLong from './card/CardStatsLong';

class MainStat extends Component {

    render() {
        const { allTweetSize, victoriaTweetSize } = this.props;
        if (allTweetSize && victoriaTweetSize) {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <CardStats
                            backgroundColor="blue"
                            iconClass="fa-twitter"
                            category="Total Harvested Tweets"
                            title={allTweetSize.toLocaleString()} />
                    </div>
                    <div className="col-md-3">
                        <CardStats
                            backgroundColor="blue"
                            iconClass="fa-twitter"
                            category="Total Tweets For Victoria Region"
                            title={victoriaTweetSize.toLocaleString()} />
                    </div>
                    <div className="col-sm-6">
                        <CardStatsLong
                            backgroundColor="red"
                            iconClass="fa-users"
                            category="Gender Statistic"
                            title={data.tweet_size.toLocaleString()}>
                            <div className="row">
                                <div className="col-sm-2 stat-text">
                                    <p>
                                        <i className="fa fa-mars"></i> Male
                                    </p>
                                    <h3>{data.male}</h3>
                                </div>
                                <div className="col-sm-2 stat-text">
                                    <p>
                                        <i className="fa fa-venus"></i> Female
                                    </p>
                                    <h3>{data.female}</h3>
                                </div>
                                <div className="col-sm-3 stat-text">
                                    <p>
                                        <i className="fa fa-genderless"></i> Unidentified
                                    </p>
                                    <h3>{data.unknown}</h3>
                                </div>
                            </div>
                        </CardStatsLong>
                    </div>
                    <div className="col-sm-6">
                        <CardStatsLong
                            backgroundColor="red"
                            iconClass="fa-users"
                            category="Gender Statistic"
                            title={data.tweet_size.toLocaleString()}>
                            <div className="row">
                                <div className="col-sm-2 stat-text">
                                    <p>
                                        <i className="fa fa-mars"></i> Male
                                    </p>
                                    <h3>{data.male}</h3>
                                </div>
                                <div className="col-sm-2 stat-text">
                                    <p>
                                        <i className="fa fa-venus"></i> Female
                                    </p>
                                    <h3>{data.female}</h3>
                                </div>
                                <div className="col-sm-3 stat-text">
                                    <p>
                                        <i className="fa fa-genderless"></i> Unidentified
                                    </p>
                                    <h3>{data.unknown}</h3>
                                </div>
                            </div>
                        </CardStatsLong>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MainStat;