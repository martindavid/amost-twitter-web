import React, { Component } from 'react';
import pace from '../../vendor/pace/pace';

class PaceProgress extends Component {
    componentDidMount() {
        pace.start({
            ajax: false,
            document: false,
            eventLag: false
        });
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default PaceProgress;