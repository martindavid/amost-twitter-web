import React from 'react';
import WordCloud from 'react-d3-cloud';

import CardContainer from '../components/card/CardContainer';

const fontSizeMapper = word => Math.log2(word.value) * 3;
const rotate = word => word.value % 45;

const WordCloudRenderer = props => {
    if (props.data) {
        return (
            <CardContainer backgroundColor="red"
                title="Word Cloud"
                description="Word Analysis from all tweets">
                <WordCloud
                    data={props.data}
                    fontSizeMapper={fontSizeMapper}
                    rotate={rotate}
                    width={400}
                    height={400}
                />
            </CardContainer>
        );
    }
    else {
        return null;
    }
}

export default WordCloudRenderer;