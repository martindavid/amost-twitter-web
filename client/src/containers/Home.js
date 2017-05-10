import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainStat from '../components/MainStat';
import SentimentAnalysis from './SentimentAnalysis';
import WordCloudRenderer from '../components/WordCloudRenderer';
import TermsCount from '../components/TermsCount';
import SentimentMap from './SentimentMap';
import agent from '../agent';

const mapStateToProps = state => ({
    ...state.home
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'HOME_ON_LOAD', payload })
});

class Home extends Component {

    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Tweet.getTimeBreakdown(),
            agent.Tweet.getDateBreakdown(),
            agent.Tweet.getTopHashtag(),
            agent.Tweet.getTopWord(),
            agent.Tweet.getWordList(),
            agent.Info.get()
        ]));
    }

    render() {
        return (
            <div className="container-fluid">
                <MainStat data={this.props.dataInfo} />
                <div className="row">
                    <div className="col-sm-12">
                        <SentimentAnalysis />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <TermsCount 
                          hashtag={this.props.topHashtag}
                          keyword={this.props.topKeyword} />
                    </div>
                    <div className="col-sm-6">
                        <WordCloudRenderer data={this.props.wordList} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <SentimentMap />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);