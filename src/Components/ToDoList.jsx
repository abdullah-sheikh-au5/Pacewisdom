import React from 'react';
import Input from '../Components/Input'
import List from '../Components/List'
import { connect } from 'react-redux';
import { setUserData } from '../ActionCreator/Action'
import { Link } from 'react-router-dom';

const ToDoList = (props) => {
  const {setUserData,user} = props
    return (
              <>
              <nav>
                  <Link to='/login' className='btn btn-danger mt-2 ml-2' onClick={()=>setUserData(user)} >Logout</Link>
              </nav>
              <div className="mt-3 row">
                  <div className="col-md-6 offset-3">
                    <Input/>
                  </div>
              </div>
              <div className="mt-3 mb-5 row">
                  <div className="px-0 col-md-8 shadow rounded offset-2">
                    <List />
                  </div>
              </div>
            </>
    );
};

const mapStateToProps = (state)=>{
  return{
    user: state.app.user
  }
}


export default connect(mapStateToProps,{setUserData}) (ToDoList);