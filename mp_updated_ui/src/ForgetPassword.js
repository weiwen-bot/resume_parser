import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const boxStyle = {
    top: '45%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)'
}

const inputStyle = {
    fontSize: '10px',
    padding: '12px 5px',
    width: '55%',
    borderRadius: '2px'
}

const labelStyle = {
    fontSize: '15px',
}

const buttonStyle = {
    backgroundColor: 'white',
    margin: '30px 0',
    fontSize: '15px',
    textAlign: 'center',
    marginLeft: '54%',
    padding: '4px 0',
    borderRadius: '3px'
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default class ForgetPwd extends React.Component {
    render() {
        return(
            <div>
                <div className="w-75 shadow p-3 mb-5 bg-white rounded text-center col-xl-6" style={boxStyle}>
                    <b style={{fontSize:'30px'}}>Forget Password</b>
                    <hr/>
                    <div className="pt-5">
                        <label>Please enter your registered email address</label>
                    </div>
                    <br />
                    <div className="pb-4">
                        <label className="pr-5" style={labelStyle}>Email Address : </label>
                        <input type="email" name="email" placeholder="Enter Email Address" className="border border-secondary" style={inputStyle}/>
                    </div>
                    {/* <div className="d-flex my-3 justify-content-end mr-5"> */}
                        <button id="btn" className="border border-dark col-3 col-md-2" style={buttonStyle}><Link to="/reset_password" style={linkStyle}>Confirm</Link></button>
                        {/* <button className="border border-dark" style={buttonStyle}><Link to="/" style={linkStyle}>Cancel</Link></button> */}
                    {/* </div> */}
                    <div style={{fontSize: '12px', textAlign: 'left'}}>
                        <Link to="/" className="pr-1" style={linkStyle}><FaArrowLeft color="black" className="mr-2 mb-1"/>Back to Login</Link>
                    </div>
                </div> 
            </div> 
        )
    }
}
