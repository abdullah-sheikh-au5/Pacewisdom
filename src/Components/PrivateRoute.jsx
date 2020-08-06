import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component,login, ...rest }) => (

    <Route {...rest} render={(props) => (
        // localStorage.getItem('token')
        login
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

const mapStateToProps = (state)=> {
    return {
        login: state.app.login, 
    };
}


export default connect(mapStateToProps,{}) (PrivateRoute)
