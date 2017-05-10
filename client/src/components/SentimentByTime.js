import React from 'react';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';

const SentimentByDate = props => {
    const { data } = props;
    if (data) {
        // Construct the data
        const categories = data.map((val, i) => {
            return val.time;
        });

        let tweets = [];
        let posSentiment = [];
        let negSentiment = [];
        let netSentiment = [];

        data.forEach((val, i) => {
            tweets.push(val.tweet_count);
            posSentiment.push(val.pos);
            negSentiment.push(val.neg);
            netSentiment.push(val.net);
        });

        const chartConfig = {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: ''
            },
            xAxis: [{
                categories: categories,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                },
                title: {
                    text: 'Tweet Count',
                }
            },
            { // Secondary yAxis
                title: {
                    text: 'Sentiment',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 80,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Tweets',
                type: 'column',
                data: tweets,
                tooltip: {
                    valueSuffix: ' tweet'
                }

            }, {
                name: 'Positive',
                type: 'spline',
                yAxis: 1,
                color: '#0000FF',
                data: posSentiment,
                tooltip: {
                    valueSuffix: ' tweet'
                }
            }, {
                name: 'Negative',
                type: 'spline',
                yAxis: 1,
                color: '#FF0000',
                data: negSentiment,
                tooltip: {
                    valueSuffix: ' tweet'
                }
            }
            , {
                name: 'Neutral',
                type: 'spline',
                yAxis: 1,
                color: '#000000',
                data: netSentiment,
                tooltip: {
                    valueSuffix: ' tweet'
                }
            }]
        }

        return (
            <ReactHighcharts config={chartConfig} />
        )
    }
    else {
        return null;
    }
}

export default SentimentByDate;