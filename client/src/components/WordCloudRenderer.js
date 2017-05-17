import React from 'react';
import WordCloud from 'react-d3-cloud';

import CardContainer from '../components/card/CardContainer';

const fontSizeMapper = word => Math.log2(word.value) * 2;
const rotate = word => word.value % 360;

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
                    width={500}
                    height={400}
                    padding={2}
                />
            </CardContainer>
        );
    }
    else {
        return null;
    }
}

export default WordCloudRenderer;