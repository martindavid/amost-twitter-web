export const constructChartConfig = (tooltipText ,xAxisTitle, yAxisTitle, data) => {
    return {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: ''
        },
        xAxis: {
            min: 0,
            title: {
                enabled: true,
                text: xAxisTitle
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            floating: false,
            backgroundColor: '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 4,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    pointFormat: tooltipText
                }
            }
        },
        series: [{
            regression: true,
            name: "Local Government Area (2011)",
            color: 'rgba(223, 83, 83, .5)',
            data: data
        }]
    };
}