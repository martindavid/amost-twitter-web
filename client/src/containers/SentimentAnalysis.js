import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../agent';

import CardContainer from '../components/card/CardContainer';
import SentimentPie from '../components/SentimentPie';
import SentimentByDate from '../components/SentimentByDate';
import SentimentByTime from '../components/SentimentByTime';

const mapStateToProps = state => ({
    ...state.sentiment
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'SENTIMENT_ON_LOAD', payload })
});

class SentimentAnalysis extends Component {

    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.TweetSentiment.get(),
            agent.TweetSentiment.getDateBreakDown(),
            agent.TweetSentiment.getTimeBreakDown()
        ]));
    }

    render() {
        return (
            <CardContainer backgroundColor="red"
                title="Sentiment Analysis"
                description="Sentiment analysis result">
                <div className="row">
                    <div className="col-sm-12">
                        <SentimentPie data={this.props.sentiment} />
                        <SentimentByDate data={this.props.sentimentByDate} pieData={this.props.sentiment} />
                    </div>
                    <div className="col-sm-12">
                        <SentimentByTime data={this.props.sentimentByTime} />
                    </div>
                </div>
            </CardContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SentimentAnalysis);