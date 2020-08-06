import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {setEmail,setPassword,setConfirmPassword,createUser} from '../ActionCreator/Action'
const SignUp = (props) => {
const { setEmail,setPassword,setConfirmPassword,createUser,email,password,confirmPassword } = props
    return (
            <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
                <h2>SignUp</h2>
                <div className='border border-info rounded p-5'>
                    <label htmlFor="InputEmail1">Email address</label>
                    <input type="email" className="form-control mb-2" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>    
                    <label htmlFor="Password1">Password</label>
                    <input type="password" className="form-control mb-2" id="Password1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <label htmlFor="confirmPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword1" placeholder="Confirm Password" onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
                    <Link {...(password.length!==0 && password===confirmPassword?{to:'/login'}:{})} type="button" className="btn btn-success btn-block mt-3" onClick={()=>createUser(email,password)} >Create User</Link>
                    <p className='mt-2' >Already have an account? <Link style={{color:'blue'}} to='/login'>Login here</Link></p>
                </div>
            </div>
    );
};

const mapStateToProps = (state)=> {
    return {
        email: state.app.email, 
        password: state.app.password, 
        confirmPassword: state.app.confirmPassword,
    };
}


export default connect(mapStateToProps,{ setEmail,setPassword,setConfirmPassword,createUser })(SignUp);