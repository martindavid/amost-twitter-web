import React from 'react';
import CardContainer from '../components/card/CardContainer';
import ReactHighcharts from 'react-highcharts';
import Highcharts from 'highcharts';

const pieData = [
    { name: 'Positive', y: 100 },
    { name: 'Negative', y: 56 },
    { name: 'Neutral', y: 30 }
];

const chartConfig = {
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    distance: -50
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Sentiment',
            colorByPoint: true,
            data: pieData
        }]
};

const SentimentPie = props => {
    return (
        
        <ReactHighcharts config={chartConfig} />
    );
}

export default SentimentPie;