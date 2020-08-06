import React from 'react';
import { connect } from 'react-redux';
import { setDropdownState,removeListItem,editListItem,isCompleted } from '../ActionCreator/Action'

const List = (props) => {

    const { setDropdownState,removeListItem,editListItem,isCompleted,dropdown,toDoList } = props


    return (
        <div className='p-5 bg-light'>
        <div className='row'>
          <h3 className='col'>TO DO LIST</h3>
          <div className='btn-group dropright'>
            <button
              type='button'
              className='btn btn-secondary dropdown-toggle'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
          {dropdown}
            </button>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='#!'onClick={()=> setDropdownState("ALL")}>
                ALL
              </a>
              <a className='dropdown-item' href='#!'onClick={()=> setDropdownState("COMPLETED")} >
                COMPLETED
              </a>
              <a className='dropdown-item' href='#!'onClick={()=> setDropdownState("ACTIVE")} >
                ACTIVE
              </a>
            </div>
          </div>
          <hr />
        </div>
        <ul className='w3-content w3-section list-group mt-1'>
          {toDoList.filter((item)=>{
            if(dropdown=== "ACTIVE"){
              return !item.isCompleted
            }
            if(dropdown=== "COMPLETED"){
              return item.isCompleted
            }
            return item
          })
          .map((element, index) => {
            return (
              <li
                key={index}
                className={
                  'w3-animate-zoom pb-0 mb-3 shadow rounded list-group-item  ' +
                  (element.isCompleted
                    ? 'list-group-item-success'
                    : 'list-group-item-danger')
                }
              >
                {element.isCompleted ? (
                  <del>{element.title}</del>
                ) : (
                  element.title
                )}
                &nbsp;&nbsp;&nbsp;&nbsp; {element.deadline}
                <a href='#!'>
                  <i
                    className='fa fa-pencil-square-o text-dark ml-3'
                    aria-hidden='true'
                    onClick={() => editListItem(index)}
                  ></i>
                </a>
                <a href='#!'>
                  <i
                    className='fa fa-window-close pull-right text-dark ml-3'
                    aria-hidden='true'
                    onClick={() => removeListItem(index)}
                  ></i>
                </a>
                <a href='#!'>
                  <i
                    className='fa fa-check pull-right text-dark'
                    aria-hidden='true'
                    onClick={() => isCompleted(index)}
                  ></i>
                </a>
                <div className='row'>
                  <div className='col-sm-12'>
                    <small className='pull-right'>
                      <em>Created On: {element.createdOn}</em>
                    </small>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

function mapStateToProps(state) {
    return {
      dropdown: state.app.dropdown,
      toDoList: state.app.user.toDoList,
    };
}

export default connect(mapStateToProps,{setDropdownState,removeListItem,editListItem,isCompleted}) (List);