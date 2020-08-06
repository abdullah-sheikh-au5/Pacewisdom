import React, { Component } from 'react';
import { Switch,BrowserRouter,Route,Redirect } from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ToDoList from './Components/ToDoList'
import PrivateRoute from './Components/PrivateRoute'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path='/' exact> <Redirect to='/login'/></Route>
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={SignUp} />
        {/* <Route path='/toDoList' exact component={ToDoList} /> */}
        <PrivateRoute path='/toDoList' exact component={ToDoList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;