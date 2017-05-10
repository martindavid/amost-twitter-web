import React, { Component } from 'react';

import PositiveSentiment from '../components/extra/PositiveSentiment';
import NegativeSentiment from '../components/extra/NegativeSentiment';
import FastFood from '../components/extra/FastFood';
import IschemicHeartNegative from '../components/extra/IschemicHeartNegative';
import IschemicHeartPositive from '../components/extra/IschemicHeartPositive';
import IschemicHeartAverage from '../components/extra/IschemicHeartAverage';

class ExtraTopic extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <NegativeSentiment />
                    </div>
                    <div className="col-sm-6">
                        <PositiveSentiment />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <FastFood />
                    </div>
                    <div className="col-sm-6">
                        <IschemicHeartNegative />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <IschemicHeartPositive />
                    </div>
                    <div className="col-sm-6">
                        <IschemicHeartAverage />
                    </div>
                </div>
            </div>
        )
    }
}

export default ExtraTopic;