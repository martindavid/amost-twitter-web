import React, { Component } from 'react';

import CardStats from '../components/card/CardStats';

import MainStat from '../components/MainStat';
import SentimentAnalysis from '../components/SentimentAnalysis';

class Home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <MainStat />
                <div className="row">
                    <div className="col-sm-6">
                        <SentimentAnalysis />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;