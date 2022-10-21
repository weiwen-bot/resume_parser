import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import Logo from '../src/Images/logo.png';
import Profile from '../src/Images/profile.jpg' 
import HomeTab from './Tabs';
import CandidatesTable from './CandidatesTable';
import ProfilePage from './ProfilePage';
import CandidateProfile from './CandidateProfile'
import JobroleTable from './JobroleTable';
import JobRoleDashboard from './JobRoleDashboard'
import Schedule from './Schedule';

export default class NavBar extends React.Component {
    render() {
        return(
            <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark" style={{zIndex: '1'}}>
                    <Link to="/Candidates"><img src={Logo} class="logo"/></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>

                            <NavLink to="/Candidates" className="link">Home</NavLink>
                            <NavLink to="/Schedule" className="link">Scheduling</NavLink>
                            <NavLink to="/Hi" className="link">Notifications</NavLink>
                            
                            
                            <NavDropdown id="collasible-nav-dropdown" title={<img src={Profile} height="50px" className="pf" to="/"/>} alignRight>
                                <NavDropdown.Item><Link to="/ProfilePage" className="dropdownlink">Profile</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to="/" className="dropdownlink">Logout</Link></NavDropdown.Item> 
                            </NavDropdown>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
                <Route path='/candidate_profile' component={CandidateProfile}></Route>
                <Route path='/Candidates' component={HomeTab}></Route>
                <Route path='/ProfilePage' component={ProfilePage}></Route>
                <Route path='/job_role' component={JobroleTable}/>
                <Route path="/JR_dashboard" component={JobRoleDashboard}/>
                <Route path='/Schedule' component={Schedule}></Route>
            </div>
            </Router>
        )
    }
}