import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const boxStyle = {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%,-50%)'
}

const inputStyle = {
    fontSize: '10px',
    padding: '8px 5px',
    width: '45%',
}

const labelStyle = {
    fontSize: '15px',
    width: '30%',
    textAlign: 'left'
}

const buttonStyle = {
    backgroundColor: 'transparent',
    width: '18%',
    marginRight: '15px',
    fontSize: '12px',
    padding: '5px'
}

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default class ResetPwd extends React.Component {
    
    render() {
        return(
            <div>
                <div className="w-50 shadow p-3 mb-5 bg-white rounded text-center" style={boxStyle}>
                    <b style={{fontSize:'30px'}}>RESET PASSWORD</b>
                    <hr/>
                    <div className="pt-3">
                        <label className="pr-5" style={labelStyle}>New Password : </label>
                        <input type="password" name="password" placeholder="Enter New Password" className="border border-secondary" style={inputStyle}/>
                    </div>
                    <br />
                    <div className="py-3">
                        <label className="pr-5" style={labelStyle}>Confirm Password : </label>
                        <input type="password" name="password" placeholder="Enter Password" className="border border-secondary" style={inputStyle}/>
                    </div>
                    <div className="d-flex my-3 justify-content-end" style={{marginRight:"60px"}}>
                        <button id="btn" className="border border-dark" style={buttonStyle}><Link to="/" style={linkStyle}>Reset Password</Link></button>
                        <button className="border border-dark" style={buttonStyle}><Link to="/" style={linkStyle}>Cancel</Link></button>
                    </div>
                    <div style={{fontSize: '12px', textAlign: 'left'}}>
                        <Link to="/forget_password" className="pr-1" style={linkStyle}><FaArrowLeft color="black" className="mr-2 mb-1"/>Back</Link>
                    </div>
                </div> 
            </div>  
        )
    }
}
