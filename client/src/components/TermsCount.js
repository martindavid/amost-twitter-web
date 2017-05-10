import React from 'react';
import ReactHighcharts from 'react-highcharts';

import CardContainer from '../components/card/CardContainer';

const TermsCount = props => {

    const constructChartConfig = (data, count) => {
        return {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: data
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
                data: count
            }]
        }
    }

    const { keyword, hashtag } = props;

    if (keyword && hashtag) {
        const keywordList = keyword.map((val, i) => {
            return val.word.replace('#', '');
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

        const wordConfig = constructChartConfig(keywordList, keywordCount);
        const hashtagConfig = constructChartConfig(hashtagList, hashtagCount)


        {/*<div className="box">
                <div className="box-header" data-background-color="green">
                    <h4 className="title">Word and Hashtag (Top 10)</h4>
                </div>
                <div className="box-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="text-center">
                                <h3>Keyword</h3>
                            </div>
                            <ReactHighcharts config={wordConfig} />
                        </div>
                        <div className="col-sm-6">
                            <div className="text-center">
                                <h3>Hashtag</h3>
                            </div>
                            <ReactHighcharts config={hashtagConfig} />
                        </div>
                    </div>
                </div>
            </div>*/}
        return (

            <CardContainer backgroundColor="red"
                title="Top 10 Keyword and Hashtag"
                description="Most frequent use of keyword and hashtag in the tweets">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center">
                            <h3>Keyword</h3>
                        </div>
                        <ReactHighcharts config={wordConfig} />
                    </div>
                    <div className="col-sm-6">
                        <div className="text-center">
                            <h3>Hashtag</h3>
                        </div>
                        <ReactHighcharts config={hashtagConfig} />
                    </div>
                </div>
            </CardContainer>
        )
    }
    else {
        return null;
    }
}


export default TermsCount