import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Candidate from './CandidateProfile'
import Dashboard from './Dashboard'
import { Button, ButtonGroup, Container, Table } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusSquare, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faSortAmountDown, faColumns} from "@fortawesome/free-solid-svg-icons";
import EmailForm from './EmailForm';
import CandidatesTable from './CandidatesTable'
import WordCloud from './charts/WordCloud';
import JobeRoleDashboard from './JobRoleDashboard'
import {Redirect, Link, Route} from 'react-router-dom'
import JobroleTable from './JobroleTable'

export default class HomeTab extends React.Component {

    render(){

        return(
            <div>
                <div className="tab">
                <Tabs defaultActiveKey="home" className="tabnav">
                    <Tab eventKey="home" title="Candidates" className="tabcontent">
                        <div className="iconsFlex">
                            <div>Filter by</div>
                            <FontAwesomeIcon icon={faSortAmountDown} className="iconsSize"/>
                            <div><EmailForm/></div>
                            <div>New</div>
                            <FontAwesomeIcon icon={faPlusSquare} className="iconsSize"/>
                            <div>Delete</div>
                            <FontAwesomeIcon icon={faTrashAlt} className="iconsSize"/>
                        </div>
                        <Container fluid>
                            <CandidatesTable/>
                        </Container>
                    </Tab>
                    <Tab eventKey="profile" title="Job Roles" className="tabcontent">
                    <div className="iconsFlex">
                            <div>Filter by</div>
                            <FontAwesomeIcon icon={faSortAmountDown} className="iconsSize"/>
                              <div><EmailForm/></div>  
                            <div>New</div>
                            <FontAwesomeIcon icon={faPlusSquare} className="iconsSize"/>
                            <div>Delete</div>
                            <FontAwesomeIcon icon={faTrashAlt} className="iconsSize"/>
                        </div>
                        <Container fluid>
                            <Table className="mt-4">
                                <thead>
                                <tr>
                                    <th>Job Role</th>
                                    <th>Date Created</th>
                                    <th>No. of Resumes</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={this.onClick} className="pt-2">
                                        <Link to="/job_role" style={{color: 'black'}}><td >Data Engineer</td></Link>
                                        <td>05/01/2020</td>
                                        <td>3</td>
                                        <td>Closed</td>
                                        <Link to="/JR_dashboard"><td width="20%" style={{color: 'black'}}><FontAwesomeIcon icon={faColumns} className="iconsSize"/> Dashboard</td></Link>
                                    </tr>
                                    <tr className="pt-2">
                                        <td>Software Engineer</td>
                                        <td>15/01/2020</td>
                                        <td>1</td>
                                        <td>Open</td>
                                        <td><FontAwesomeIcon icon={faColumns} className="iconsSize"/> Dashboard</td>
                                    </tr>
                                    <tr className="pt-2">
                                        <td>Dev Ops</td>
                                        <td>20/01/2020</td>
                                        <td>1</td>
                                        <td>Open</td>
                                        <td width=""><FontAwesomeIcon icon={faColumns} className="iconsSize"/> Dashboard</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                        {/* <WordCloud/> */}
                        {/* <JobeRoleDashboard/>
                        {/* <JobroleTable/> */}
                    </Tab>
                    <Tab eventKey="contact" title="Overall Dashboard">
                       <Dashboard/>
                    </Tab>
                </Tabs>
                </div>
                <div>
                    <Route path="/job_role" component={JobroleTable}/>
                </div>
            </div>
        )
    }
}
