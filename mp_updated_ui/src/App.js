import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ValidatedLoginForm from './ValidatedLoginForm';
import CreateAcc from './CreateAcc'
import ForgetPwd from './ForgetPassword'
import ResetPwd from './ResetPassword'
import Candidate from './CandidateProfile'
import NavBar from './NavBar'
import JobRoleDashboard from './JobRoleDashboard'
import JobroleTable from './JobroleTable'


export default class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ValidatedLoginForm}/>
                        <Route path="/register" component={CreateAcc}/>
                        <Route path="/forget_password" component={ForgetPwd}/>
                        <Route path="/reset_password" component={ResetPwd}/>
                        <Route path="/home" component={NavBar}/>
                        <Route path="/candidate_profile" component={Candidate}/>
                        <Route path="/JR_dashboard" component={JobRoleDashboard}/>
                        <Route path="/job_role" component={JobroleTable}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}