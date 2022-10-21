import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

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
    margin: '30px 0',
    marginLeft: '45%',
    padding: '4px 0',
    borderRadius: '3px',
    fontSize: '15px'

}

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

export default class CreateAcc extends React.Component {

    _isMounted = false;

    state = {
        users: [], 
        user: {
            email_user: '',
            password: ''
        }
    };

    componentDidMount() {
        this._isMounted = true;
        this.getUsers();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getUsers = _ => {
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then(response => {
            if (this._isMounted) {
                this.setState({ users: response.data })
            }
        })
        .catch(err => console.error(err))
    }

    addUser = _ => {
        const { user } = this.state;
        fetch(`http://localhost:4000/users/new?email=${user.email_user}&password=${user.password}`)        
        // .then(response => response.json())
        .then(this.getUsers)
        .catch(err => console.error(err))
    }

    renderUser = ({ user_id, email_user }) => <div key={user_id}>{email_user}</div>

    render() {
        const { users, user } = this.state;
        return(
            <div>
                {/* {users.map(this.renderUser)} */}
                <div className="w-75 shadow p-3 mb-5 bg-white rounded text-center col-lg-5" style={boxStyle}>
                    <b style={{fontSize:'30px'}}>CREATE AN ACCOUNT</b>
                    <hr/>
                    <div className="pt-3">
                        <label className="col-md-9 col-10 col-xl-9 col-sm-9" style={labelStyle}>Email Address : </label>
                        <input type="email" placeholder="Company Email Address" className="border border-secondary col-md-9" style={inputStyle}
                        value={user.email_user}
                        onChange={e => this.setState({ user: { ...user, email_user: e.target.value }})}/>
                    </div>
                    <br />
                    <div className="pt-3">
                        <label className="col-md-9 col-10 col-xl-9 col-sm-9" style={labelStyle}>Password : </label>
                        <input type="password" placeholder="Enter Password" className="border border-secondary col-md-89" style={inputStyle}
                        value={user.password}
                        onChange={e => this.setState({ user: { ...user, password: e.target.value }})}/>
                    </div>
                    <br/>
                    <div className="py-3">
                        <label className="col-md-9 col-10 col-xl-9 col-sm-9" style={labelStyle}>Confirm Password : </label>
                        <input type="password" placeholder=" Re-enter Password" className="border border-secondary col-md-9" style={inputStyle}
                        value={user.password1}
                        onChange={e => this.setState({ user: { ...user, password1: e.target.value }})}
                        />
                    </div>
                    <button className="border border-dark col-3 col-md-3" style={buttonStyle} onClick={this.addUser}>
                        <Link to="/" style={linkStyle}>Create</Link>
                    </button>
                    <div style={{fontSize:  '12px', textAlign: 'left'}}>
                        <Link to="/" className="pr-1" style={linkStyle}><FaArrowLeft color="black" className="mr-2 mb-1"/>Back to Login</Link>
                    </div>
                </div> 
            </div>  
        )
    }
}