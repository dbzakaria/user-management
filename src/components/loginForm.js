import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, updateUsername} from '../reducer/login'
import { withRouter } from 'react-router-dom'
import { emptyState } from '../localStorage'
import './loginForm.css'

class LoginForm extends Component {

    componentDidMount() {
        emptyState();
    }

    handleInputUsername = (evt) => {
        evt.preventDefault()
        const val = evt.target.value;
        this.props.updateUsername(val)
      }
    
      handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.signIn(this.props.user.username);
        this.props.history.push('/users');
      }

      canSubmit() {
        return !(this.props.user.username.length > 0);
      }

    render() {
        const isEnabled = this.canSubmit();
        // const user = this.props.user;
        return (
            <div className="login-form">
                <h4><i className="fas fa-user"></i>User Login</h4>
                <hr/>
                <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="username" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" onChange={this.handleInputUsername}/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={isEnabled}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(
    (state) => ({user: state.authenticatedUser.user}),
    {signIn, updateUsername}
  )(LoginForm))