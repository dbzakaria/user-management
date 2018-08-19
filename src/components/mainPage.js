import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
class MainPage extends Component {
    render() {
        const loggedInUser = this.props.user;
        return (
            <div className="jumbotron">
            <h1>Welcome to user management!</h1>
            {(loggedInUser.isAuth) ? (
                <Redirect to={{
                    pathname: '/users',
                    state: { from: this.props.location }
                }}/>
            ) : (
                <div>
                <p>To start using it, please Sign in</p>
                <p><a className="btn btn-primary btn-lg" href="/login" role="button">Sign In</a></p>
                </div>
            )}
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({user:state.authenticatedUser.user}),
)(MainPage))