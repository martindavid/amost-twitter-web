import React from 'react';
import WordCloud from 'react-d3-cloud';

import CardContainer from '../components/card/CardContainer';

const data = [
    { text: 'Hey', value: 1000 },
    { text: 'lol', value: 200 },
    { text: 'first impression', value: 800 },
    { text: 'very cool', value: 1000000 },
    { text: 'duck', value: 10 },
];

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