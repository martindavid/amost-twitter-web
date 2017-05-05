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

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

const WordCloudRenderer = props => {
    return (
        <CardContainer backgroundColor="red"
            title="Word Cloud"
            description="Word Analysis from all tweets">
        <WordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            width={400}
            height={400}
        />
        </CardContainer>
    );
}

export default WordCloudRenderer;