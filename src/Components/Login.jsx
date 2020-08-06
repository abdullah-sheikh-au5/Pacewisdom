import React,{useState,} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUser } from '../ActionCreator/Action'

const Login = (props) => {
    const { checkUser,login,users } = props

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleOnClick = ()=>{
        checkUser(email,password,users) 
    }


    return (
            <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
                <h2>Login</h2>
                <div className='border border-info rounded p-5'>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} required/>    
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <Link to={login?'toDoList':'login'} type="button" className="btn btn-success btn-block mt-3" onClick={()=>handleOnClick()} >Submit</Link>
                    <p className='mt-2'>Don't have an account? <Link style={{color:'blue'}} to='/signup'>Sign up here</Link></p>
                </div>
            </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        users: state.app.users,
        login: state.app.login
    }
}
export default connect(mapStateToProps,{checkUser}) (Login);