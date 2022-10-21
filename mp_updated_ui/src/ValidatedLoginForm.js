import React from 'react';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

const boxStyle = {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)'
}

const inputStyle = {
    fontSize: '10px',
    padding: '12px 5px',
    width: '70%',
    borderRadius: '2px'
}

const labelStyle = {
    fontSize: '15px',
    textAlign: 'left',
    paddingLeft: '20px',
    paddingBottom: '5px'
}

const buttonStyle = {
    backgroundColor: 'transparent',
    textAlign: 'center',
    margin: '30px 0px',
    marginLeft: '45%',
    padding: '4px 0',
    borderRadius: '3px',
    fontSize: '15px'
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default class Login extends React.Component {

    state = {
        users: [],
        user: {
            email: '',
            password: ''
        }
    }
     
        componentDidMount() {
            this.getUsers();
        }

        getUsers = _ => {
            fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.error(err))
        }
    
        retriveUser = _ => {
            fetch('http://localhost:4000/users/login')
            .then(response => response.json())
            .then(this.getUsers)
            .catch(err => console.error(err))
        }

        addUser = _ => {
            const { user } = this.state;
            fetch(`http://localhost:4000/users/new?email=${user.email}&password=${user.password}`)
            .then(this.getUsers)
            .catch(err => console.error(err))
        }

        // renderUser = ({ user_id, email }) => <div key={user_id}>{email}</div>

        render() {

        const { users, user } = this.state;

        return (
            <form className="w-75 shadow mt-0 ml-0 mb-5 bg-white rounded text-center col-lg-6 col-xl-5" style={boxStyle} onSubmit={this.addUser}>
                <b style={{fontSize:'30px'}}>SIGN IN</b>
                <hr/>
                <div className="pt-5">
                    <label className="col-md-9 col-10 col-xl-9 col-sm-9" style={labelStyle}>Company ID : </label>
                    <input 
                        type="text" 
                        name="email" 
                        value={user.email} 
                        onChange={e => this.setState({ user: { ...user, email: e.target.value }})}
                        placeholder="Company Email Address" 
                        className="border border-secondary col-md-7" 
                        // className={errors.email && touched.email && "error"}
                        style={inputStyle}
                    />
                    {/* {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                    )} */}
                </div>
                <br />
                <div className="py-4">
                    <label className="col-md-9 col-10 col-xl-9 col-sm-9" style={labelStyle}>Password : </label>
                    <input 
                        type="password" 
                        name="password" 
                        value={user.password}
                        placeholder="Enter Password" 
                        onChange={e => this.setState({ user: { ...user, password: e.target.value }})}
                        className="border border-secondary col-md-7" 
                        // className={errors.password && touched.password && "error"}
                        style={inputStyle}
                    />
                    {/* {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                    )} */}
                </div>
                <button type="submit" className="border border-dark col-3 col-md-3 " style={buttonStyle} onSubmit={this.retriveUser}>Login</button>
                <div className="d-flex pt-4" style={{fontSize: '12px'}}>
                    <Link to="/register" className="pr-1" style={linkStyle}>Not Registered ?</Link> | 
                    <Link to="/forget_password" className="pl-1" style={linkStyle}>Forget Password ?</Link>
                </div>
            </form>
        );
    }}

// export default ValidatedLoginForm;