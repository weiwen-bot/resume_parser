import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const options = data => ({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Educational Level'
    },
    xAxis: {
        categories: ['Diploma', 'Bachelor of Degree', 'Masters', 'PhD'],
        title: {
            text:""
        }
    },

    credits: {
        enabled: false
    },

    yAxis: {
        title: {
            text: 'count'
        }
    },
    series: [{
        name: 'No. of Candidates',
        data: data
    }]
});

export default class BarChart extends React.Component {
    constructor() {
        super();
        this.state = {
            dataResults: [],
            dataResult: {
                rating: ''
            }
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        fetch('http://localhost:4000/education')
        .then(res => res.json())
        .then(res => {
            this.setState({
                dataResults: res.data
            })
        })
    }

    render() {
        const {dataResults, dataResult} = this.state;
        const chartConfig = options(dataResults);
        return (
            <HighchartsReact highcharts={Highcharts} options={chartConfig}/>
        )
    }
}