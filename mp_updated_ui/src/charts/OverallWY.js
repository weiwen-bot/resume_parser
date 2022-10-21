import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";

const options = data => ({
    chart: {
        type: 'packedbubble',
        height: 400,
        // width: 600
    },
    title: {
        text: 'Average number of years working'
    },
    // tooltip: {
    //     useHTML: true,
    //     pointFormat: '<b>{point.name}:</b> {point.value}'
    // },
    // plotOptions: {
    //     packedbubble: {
    //         minSize: '30%',
    //         maxSize: '120%',
    //         zMin: 0,
    //         zMax: 1000,
    //         layoutAlgorithm: {
    //             splitSeries: false,
    //             gravitationalConstant: 0.02
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             format: '{point.name}',
    //             filter: {
    //                 property: 'y',
    //                 operator: '>',
    //                 value: 250
    //             },
    //             style: {
    //                 color: 'black',
    //                 textOutline: 'none',
    //                 fontWeight: 'normal'
    //             }
    //         }
    //     }
    // },
    // credits: {
    //     enabled: false,
    // },
    series: [{
        name: 'Years of Experience',
        data: data
        // data: [50, 12, 33, 45, 60]
    }]
});

export default class BubbleChart extends React.Component {
    constructor() {
        super();
        this.state = {
            dataResults: []
        }
    }

    componentDidMount() {
        this.getBubbleData();
    }

    getBubbleData = () => {
        fetch('http://localhost:4000/experience')
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
