import React from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";
import CandidateProfile from './CandidateProfile'
// import {Link, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import EmailForm from './EmailForm';
import CandidatesTable from './CandidatesTable'

import { Tab, Tabs } from 'react-bootstrap';

export default class JobroleTable extends React.Component {
 constructor(props) {
  super(props);
         this.state = {
          candidates: []
        };
    }
  componentDidMount() {
    this.getJobRoleCandids();
  } 

  getJobRoleCandids = _ => {
    fetch(`http://localhost:4000/jobrole/candidates`)
    .then(response => response.json())
    .then(res => {
      this.setState({ candidates: res.data });
    })
  }

  render() {
    const {candidates} = this.state;
    return (
        <div>
        <div className="tab">
        <Tabs defaultActiveKey="profile" className="tabnav">
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
                <div>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Date Applied</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Compatability</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { candidates.map(candidates => 
          <tr>
            <td>{candidates.application_date}</td>
            <td>{candidates.resume_id}</td>
            <td>{candidates.name}</td>
            <td>{candidates.email_add}</td>
            <td>{candidates.total_per}</td>
            <td>{candidates.res_tatus}</td>
            <td>
              <div className="d-flex">
                {/* <button style={{border: 'none'}} tag={Link} to={"/candidate_profile"}>View</button> */}
                <div className="mr-2">
                  <FontAwesomeIcon icon={faEdit} className="iconsSize"/>
                </div>
                <button onClick={() => window.confirm("Do you sure you wish to delete this user?") && this.deleteUser(candidates.resume_id)} style={{border: 'none'}}>
                  <FontAwesomeIcon icon={faTrashAlt} className="iconsSize"/>
                </button>
              </div>
            </td>
            
          </tr>
        )}
        </tbody>
      </Table>
    </div>
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
    </div>
)
}
}
