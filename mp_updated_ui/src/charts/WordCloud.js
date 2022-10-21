import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

const options = data => ({
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurence'
    }],
    title: {
        text: 'Worldwide of...'
    },
    credits: {
        enabled: false
    }
});

export default class WordCloud extends React.Component {
    constructor() {
        super();
        this.state = {
            dataResults: [],
        }
    }

    componentDidMount() {
        this.getcloudData();
    }

    getcloudData = () => {
        fetch('http://localhost:4000/wordcloud')
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

