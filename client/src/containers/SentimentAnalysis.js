import React, { Component } from 'react';
import CardContainer from '../components/card/CardContainer';
import SentimentPie from '../components/SentimentPie';
import SentimentByDate from '../components/SentimentByDate';
import SentimentByTime from '../components/SentimentByTime';

class SentimentAnalysis extends Component {

    render() {
        return (
            <CardContainer backgroundColor="red"
                title="Sentiment Analysis"
                description="Sentiment analysis result">
                <div className="row">
                    <div className="col-sm-12">
                        <SentimentPie />
                        <SentimentByDate />
                    </div>
                    <div className="col-sm-12">
                        <SentimentByTime />
                    </div>
                </div>
            </CardContainer>
        )
    }
}

export default SentimentAnalysis;