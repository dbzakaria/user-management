import React, { Component } from 'react';
import './App.css';
import UsersList from './components/usersList'
import UserForm from './components/userForm'
import {Provider, connect} from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import LoginForm from './components/loginForm';
import MainPage from './components/mainPage';
import Menubar from './components/common/Menubar';

const PrivateRoute = ({ user: loggedInUser, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      loggedInUser.isAuth === true 
        ? <Component {...props} />
        : <Redirect to={{pathname: "/login", state: { from: props.location }}} />
      )}/>
);

class App extends Component {
  render() {
    const store = this.props.store;
    const loggedInUser = this.props.user;
    console.log(loggedInUser);

    return (
        <Provider store={store}>
            <Router>
                <div className="App container">
                  <Menubar />
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/login" component={LoginForm} />
                  <PrivateRoute path="/createUser" user={loggedInUser} component={UserForm} />
                  <PrivateRoute path="/editUser/:id" user={loggedInUser} component={UserForm} />
                  <PrivateRoute path="/users" user={loggedInUser} component={UsersList} />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default connect(
  (state) => ({user: state.authenticatedUser.user})
)(App)
