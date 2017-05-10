import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import CardContainer from '../card/CardContainer';
import { constructChartConfig } from './ChartConfig';

class IschemicHeartPositive extends Component {
    render() {
        const chartData = [
            [89, 25.324567801331803],
            [10, 28.676789854528398],
            [74, 24.378532123670201],
            [45, 16.499853656108801],
            [32, 21.849796055083999],
            [15, 21.5354279039957],
            [200, 11.2545158677174],
            [9, 25.606003523773197],
            [120, 13.286631148733999],
            [80, 25.620078930995604],
            [10, 32.130266461636801],
            [20, 31.750369853159899],
            [21, 20.700205645826003],
            [143, 24.0213034549692],
            [0, 38.904543949498503],
            [55, 28.191230937281698],
            [28, 30.275013850450801],
            [174, 25.3576572136203],
            [22, 29.616646517283801],
            [26, 28.962313795844999],
            [3, 25.267015490892099],
            [157, 17.756517789735998],
            [2, 29.661434538896799],
            [5, 26.674244626402803],
            [521, 26.4550010268492],
            [72, 26.922552701345399],
            [300, 26.274615849423103],
            [21, 27.705629465374304],
            [41, 30.393716439913103],
            [0, 35.9942293142065],
            [73, 30.3044305551268],
            [6, 28.674571489946899],
            [121, 27.308407050487197],
            [21, 22.132558093741004],
            [88, 20.726833872897302],
            [78, 21.320629995815001],
            [24, 36.242819519456702],
            [1, 41.343375586171398],
            [49, 15.097509421640801],
            [48, 12.730023684804401],
            [5, 25.470936589125699],
            [122, 31.8578475547443],
            [82, 16.6930574225043],
            [2664, 21.961722216470104],
            [47, 30.168911863837401],
            [9, 27.3541500703347],
            [23, 26.346576950777997],
            [61, 27.844459613222398],
            [90, 13.158598518687699],
            [117, 19.792777150374],
            [49, 17.749521094554499],
            [172, 24.296710245262602],
            [58, 22.948657756512603],
            [22, 28.673371750936898],
            [9, 20.903465800288103],
            [30, 24.764910129042502],
            [24, 14.633235634385299],
            [37, 29.958091378346001],
            [444, 27.298777501728896],
            [5, 30.217905107984301],
            [0, 30.131639891111899],
            [24, 27.070564473475599],
            [5, 25.063865842040702],
            [355, 13.0347973493209],
            [4, 28.749591412070799],
            [104, 15.1897789649085],
            [21, 30.822340125707196],
            [7, 25.0861377041808],
            [38, 19.392033665972701],
            [22, 23.639892692216701],
            [5, 27.864120854026105],
            [2, 40.356008238667101],
            [72, 15.3726340263757],
            [82, 24.675829997124602],
            [13, 27.253280670261002],
            [60, 25.508234590516896],
            [550, 20.629539357199999],
            [264, 20.6429887700283],
            [2, 29.646240671642698],
        ];
        const yAxisTitle = 'Avg Premature Death from Ischemic heart disease (per 100,000)';
        const xAxisTitle = 'Positive Tweets count';
        const tooltipText = '{point.x} Positive Tweets, {point.y} Avg Premature Death from Ischemic heart disease';

        const chartConfig = constructChartConfig(tooltipText, xAxisTitle, yAxisTitle, chartData);

        return (
            <CardContainer backgroundColor="red"
                title="Sentiment Analysis"
                description="Avg Premature Death from Ischemic heart disease (per 100,000) and Positive Tweets">
                <ReactHighcharts config={chartConfig} />
            </CardContainer>
        )
    }
}

export default IschemicHeartPositive;