import React from 'react';
import ReactHighcharts from 'react-highcharts';

const TermsCount = props => {

    const { keyword, hashtag } = props;


    if (keyword && hashtag) {
        console.log(hashtag);
        const keywordList = keyword.map((val, i) => {
            return val.word.replace('#','');
        });

        const keywordCount = keyword.map((val, i) => {
            return val.count;
        });

        const hashtagList = hashtag.map((val, i) => {
            return "#" + val.hashtag;
        });

        const hashtagCount = hashtag.map((val, i) => {
            return val.count;
        });


        const keywordConfig = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: keywordList
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
                name: 'Frequency',
                data: keywordCount
            }]
        }

        const hashtagConfig = {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: hashtagList
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
                name: 'Frequency',
                data: hashtagCount
            }]
        }

        return (
            <div className="box">
                <div className="box-header" data-background-color="green">
                    <h4 className="title">Word and Hashtag</h4>
                </div>
                <div className="box-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="text-center">
                                <h3>Keyword</h3>
                            </div>
                            <ReactHighcharts config={keywordConfig} />
                        </div>
                        <div className="col-sm-6">
                            <div className="text-center">
                                <h3>Hashtag</h3>
                            </div>
                            <ReactHighcharts config={hashtagConfig} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}


export default TermsCount