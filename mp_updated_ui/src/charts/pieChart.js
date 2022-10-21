import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const options = data => ({
    chart: {
        type: 'pie'
    },
    title: {
        text: 'University Distribution'
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'No. of Candidates',
        data: data
    }]
});

export default class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {
            dataResults: []
        }
    }

    componentDidMount() {
        this.getPieData();
    }

    getPieData = () => {
        fetch('http://localhost:4000/school')
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