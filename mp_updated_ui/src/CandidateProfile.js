import React from 'react';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import more from 'highcharts/highcharts-more'
import PDFViewer from 'mgr-pdf-viewer-react'
import IndividualWE from './charts/IndividualWE'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom'

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

const options = data => ({

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: "Skills Overview",
        x: -80
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Leadership Skills', 'Education Level', 'Frontend Skills', 'Backend Skills', 'Experience'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    credits: {
        enabled: false
    },

    series: [{
        name: "Candidate's Overall Statistics",
        data: data,
        pointPlacement: 'on'
    }, {
        name: "Our Expectations",
        data: [2,4,5,1,3],
        pointPlacement: 'on'
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                pane: {
                    size: '70%'
                }
            }
        }]
    }

});

function ExamplePDFViewer() {

    return (
        <div>
            <button type="button" data-toggle="modal" data-target="#exampleModalCenter" className="border border-dark px-4 py-1"  style={buttonStyle}>View Resume</button>
            {/* <div className="p-5"> */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div class="modal-content" style={bodyStyle}>
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle" className="text-dark ml-1">Candidate's Resume</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <PDFViewer className="col-md-6" document={{
                                url: 'http://localhost:8080/JiaXin.pdf'
                            }}/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        // </div>
)}

export default class Candidate extends React.Component {

    constructor() {
        super();
        this.state = {
            dataResults: [],
            candidate: []
        };
    }

    componentDidMount() {
        this.getSpiderData();
        this.getCandids();
    }

    getSpiderData = () => {
        fetch('http://localhost:4000/education')
        .then(res => res.json())
        .then(res => {
            this.setState({
                dataResults: res.data
            })
        })
    }

    getCandids = _ => {
        fetch(`http://localhost:4000/candidate`)
        .then(response => response.json())
        .then(res => {
          this.setState({ candidate: res.data });
        })
    }

    render() {
        const {dataResults, candidate} = this.state;
        const chartConfig = options(dataResults);

        return (
            <div className="m-4 p-5">
                <Link to="/Candidates"><div className="pb-4" style={{color: 'black'}}><FaArrowLeft color="black" className="mr-2 mb-1"/>Back to Job Roles</div></Link>
                <div className="d-flex">
                    <div className="col-xl-2 p-0 mr-5">
                        <div className="bg-white border" style={{height: '300px'}}></div>
                    </div>
                    { candidate.map(candidate => 
                    <div className="col-xl-7 ml-5 text-dark">
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Name:</b></tr>
                            <tr className="pb-3">{candidate.name}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Email Address:</b></tr>
                            <tr className="pb-3">{candidate.email_add}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Phone Number:</b></tr>
                            <tr className="pb-3">{candidate.phone_no}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Educational Qualification:</b></tr>
                            <tr className="pb-3">{candidate.education_level}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Job Applied:</b></tr>
                            <tr className="pb-3">{candidate.job_applied}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Skills:</b></tr>
                            <tr className="pb-3">{candidate.total_skills}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Total Experience:</b></tr><br/>
                            <tr className="pb-3">{candidate.total_experience}</tr>
                        </div>
                        <div className="d-flex">
                            <tr className="pb-2 col-5"><b>Current/Last Organisation:</b></tr>
                            <tr className="pb-3">{candidate.relevant_job}</tr>
                        </div>
                    </div>
                    )}
                    <div className="ml-auto">
                        <ExamplePDFViewer/>
                    </div>
                </div>
                <div className="d-flex py-5">
                    <div className="pr-2"><HighchartsReact highcharts={Highcharts} options={chartConfig}/> </div>
                    <div className="pl-1"><HighchartsReact highcharts={Highcharts} options={IndividualWE}/></div>    
                </div>
                {/* </div> */}
            </div>
        )
    }
}