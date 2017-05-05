import React, { Component } from 'react';

import CardStats from '../components/card/CardStats';

import MainStat from '../components/MainStat';
import SentimentAnalysis from '../components/SentimentAnalysis';
import WordCloudRenderer from '../components/WordCloudRenderer';
import TermsCount from '../components/TermsCount';

class Home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <MainStat />
                <div className="row">
                    <div className="col-sm-6">
                        <SentimentAnalysis />
                    </div>
                    <div className="col-sm-6">
                        <WordCloudRenderer />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <TermsCount />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;