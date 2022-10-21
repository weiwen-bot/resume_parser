import React from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";
import CandidateProfile from './CandidateProfile'
import {Link} from 'react-router-dom'

export default class CandidatesTable extends React.Component {
 constructor(props) {
  super(props);
         this.state = {
          candidates: []
        };
        this.deleteUser = this.deleteUser.bind(this);
    }
  componentDidMount() {
    this.getCandids();
    this.deleteUser();
  } 

  getCandids = _ => {
    fetch(`http://localhost:4000/candidates`)
    .then(response => response.json())
    .then(res => {
      this.setState({ candidates: res.data });
    })
  }

  deleteUser = _ => {
    fetch(`http://localhost:4000/candidates/:id`)
    .then(response => response.json())
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const {candidates} = this.state;
    return (
      // <Router>
    <div>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Date Applied</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Job Role</th>
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
            <td>{candidates.res_status}</td>
            <td>{candidates.job_applied}</td>
            <td>
            <Link to="/candidate_profile" style={{textDecoration: 'none'}}>
              <div className="d-flex">
                <button className="mr-2" style={{border: 'none'}}>
                  <FontAwesomeIcon icon={faEdit} className="iconsSize"/>
                </button>
                
                  <button onClick={() => window.confirm("Do you sure you wish to delete this user?") && this.deleteUser(candidates.resume_id)} style={{border: 'none'}}>
                    <FontAwesomeIcon icon={faTrashAlt} className="iconsSize"/>
                  </button>
              </div>
              </Link>
            </td> 
          </tr>
        )}
        </tbody>
      </Table>
    </div>
    /* <div>
      <Route path="/candidate_profile" component={CandidateProfile}/>
    </div>
    </Router> */
  );
  }
}
