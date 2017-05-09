import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardStats from '../components/card/CardStats';

import MainStat from '../components/MainStat';
import SentimentAnalysis from './SentimentAnalysis';
import WordCloudRenderer from '../components/WordCloudRenderer';
import TermsCount from '../components/TermsCount';
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
            agent.Tweet.getWordList()
        ]));
    }

    render() {
        return (
            <div className="container-fluid">
                <MainStat />
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
                    <div className="col-sm-6">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);