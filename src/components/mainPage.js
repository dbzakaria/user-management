import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to user management!</h1>
                <p>To start using it, please Sign in</p>
                <p><a className="btn btn-primary btn-lg" href="/login" role="button">Sign In</a></p>
            </div>
        );
    }
}

export default withRouter(connect()(MainPage));