import React from 'react';
import ReactHighcharts from 'react-highcharts';

const chartConfig = {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Fast food', 'Burger', 'Fried Chicken', 'Burger King', 'Beer',
            'Healthy', 'Vegetarian', 'Fitness', 'Yoga', 'Meditation']
    },
    yAxis: {
        stackLabels: {
            style: {
                color: 'white'
            },
            enabled: true,
            verticalAlign: 'middle',
            align: 'left'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0,
        },
        bar: {
            dataLabels: {
                enabled: true,
                inside: true
            }
        }
    },
    series: [{
        name: 'Value',
        data: [2000, 300, 1500, 800, 678, 500, 675, 400, 1932, 1800]
    }]
}

const TermsCount = props => {
    return (
        <div className="box">
            <div className="box-header" data-background-color="green">
                <h4 className="title">Word and Hashtag</h4>
            </div>
            <div className="box-content">
                <div className="row">
                    <div className="col-sm-6">
                        <ReactHighcharts config={chartConfig} />
                    </div>
                    <div className="col-sm-6">
                        <ReactHighcharts config={chartConfig} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TermsCount