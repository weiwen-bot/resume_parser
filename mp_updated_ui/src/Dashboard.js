import React from 'react';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import BarChart from './charts/barChart'
import more from 'highcharts/highcharts-more'
import PieChart from './charts/pieChart'
import ColumnChart from './charts/columnChart'
import BubbleChart from './charts/OverallWY';

const buttonStyle = {
    backgroundColor: 'transparent',
    textAlign: 'center',
    // position: 'absolute',
    // right: '0',
    bottom: '0',
    fontSize: '15px'

}

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="my-4">
                <div className="d-flex p-0">
                    <div className="col-5 px-1">
                        <PieChart/>
                    </div>
                    <div className="col-7 px-1">
                        <ColumnChart/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mt-2 col-8 px-1">
                        <BarChart/>
                    </div>
                    <div className="mt-2 col-4 px-1">
                        <BubbleChart/>
                    </div>
                </div>
            </div>
        )
    }
}