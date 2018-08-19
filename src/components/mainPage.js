import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
}

export default withRouter(connect()(MainPage));