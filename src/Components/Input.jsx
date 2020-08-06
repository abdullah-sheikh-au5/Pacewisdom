import React, { } from 'react';
import { connect } from 'react-redux';
import { setTitle,setDeadline,addListItem } from '../ActionCreator/Action'

const  Input =(props)=> {
    const { setTitle,setDeadline,addListItem,title,deadline,listItem } = props;
        return (
            <div className='form-group shadow px-5 pb-3 bg-light'>
            <h3 className='text-center'>TO DO</h3>
            <hr />
            <input
              type='text'
              className='form-control mt-2'
              placeholder='Add New To-Do'
               value={title}
              onChange={event => setTitle( event.target.value )}
            />
            <input
              type='date'
              className='form-control mt-2'
              placeholder='DD-MM-YYYY'
              value={deadline}
              onChange={event => setDeadline( event.target.value )}
            />
            <button
              className='btn btn-success btn-lg btn-block mt-3'
              onClick={() => {addListItem(listItem)}}
            >
              Add
            </button>
          </div>        );
    }


function mapStateToProps(state) {
    return {
      title: state.app.listItem.title,
      deadline: state.app.listItem.deadline,
      listItem: state.app.listItem,
    };
}

export default connect(mapStateToProps,{setTitle,setDeadline,addListItem})(Input);