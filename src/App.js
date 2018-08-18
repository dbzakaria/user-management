import React, { Component } from 'react';
import './App.css';
import UsersList from './components/usersList'
import UserForm from './components/userForm'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    const store = this.props.store;
    
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                  <Route exact path="/" component={UsersList} />
                  <Route path="/createUser" component={UserForm} />
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
