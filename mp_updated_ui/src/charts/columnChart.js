import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const options = data => ({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Job Role Demands'
    },
    xAxis: {
        categories: [
            'Data Engineer',
            'Dev Ops',
            'Software Engineer'
        ]
    },
    yAxis: 
    [{
        min: 0,
        title: {
            text: 'Available Slots'
        }
    }, {
        title: {
            text: 'No. of Candidates'
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Available slots',
        color: 'rgba(248,161,63,1)',
        data: [4, 32, 15],
        yAxis: 1
    }, {
        name: 'Applied',
        color: 'rgba(186,60,61,.9)',
        data: data,
        yAxis: 1
    }]
});

export default class ColumnChart extends React.Component {
    constructor() {
        super();
        this.state = {
            dataResults: []
        }
    }

    componentDidMount() {
        this.getBarData();
    }

    getBarData = () => {
        fetch('http://localhost:4000/jobrole')
        .then(res => res.json())
        .then(res => {
            this.setState({
                dataResults: res.data
            })
        })
    }

    render() {
        const {dataResults} = this.state;
        const chartConfig = options(dataResults);
        return (
            <HighchartsReact highcharts={Highcharts} options={chartConfig}/>
        )
    }
}