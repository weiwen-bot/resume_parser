import React from 'react';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import more from 'highcharts/highcharts-more'
import JobRoleEL from './charts/JobRoleEL'
import JobRoleWY from './charts/JobRoleWY'
import {Link} from 'react-router-dom'

import { FaArrowLeft } from 'react-icons/fa';

require("highcharts/modules/exporting")(Highcharts);
require("highcharts/highcharts-more")(Highcharts);

const buttonStyle = {
    backgroundColor: 'transparent',
    textAlign: 'center',
    // position: 'absolute',
    // right: '0',
    bottom: '0',
    fontSize: '15px'

}

const bodyStyle = {
    width: '650px'
}

export default class Candidate extends React.Component {

    constructor() {
        super();
        this.state = {
            dataResults: [],
            candidate: []
        };
    }

    // componentDidMount() {
    //     this.getSpiderData();
    //     this.getCandids();
    // }

    getCandids = _ => {
        fetch(`http://localhost:4000/candidate`)
        .then(response => response.json())
        .then(res => {
          this.setState({ candidate: res.data });
        })
    }

    render() {
        const {dataResults, candidate} = this.state;
        // const chartConfig = options(dataResults);

        return (
            <div className='m-4 p-5'>
                <Link to="/Candidates"><div className="pb-4" style={{color: 'black'}}><FaArrowLeft color="black" className="mr-2 mb-1"/>Back to Job Roles</div></Link>
                <div className="d-flex pb-5">
                    <div className="pr-2"><HighchartsReact highcharts={Highcharts} options={JobRoleEL}/> </div>
                    <div className="pl-1"><JobRoleWY/></div>    
                </div>
            </div>
        )
    }
}