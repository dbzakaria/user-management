import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../reducer/login'
import { withRouter } from 'react-router-dom'
import { emptyState } from '../../localStorage'

const LoggedInMenu = ({ loggedInUser, handleSignout}) => (
    <div className="collapse navbar-collapse" id="servicenow-collapse-nav-bar">    
        <ul className="nav navbar-nav">
            <li><a href="/#"><i className="fas fa-database"></i> Products</a></li>
            <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-cog"></i> Admin <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="/users"><i className="fas fa-users"></i> Users overview</a></li>
                    <li><a href="/#"><i className="fas fa-lock"></i> Roles</a></li>
                </ul>
            </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><p className="navbar-text">Welcome {loggedInUser.username}! <a href="/#" onClick={handleSignout}>Signout</a></p></li>
        </ul>
    </div>
)
class Menubar extends Component {

    handleSignuout = (e) => {
        e.preventDefault();
        this.props.signOut();
        emptyState();
        this.props.history.push("/");
    }

    render () {
        const loggedInUser = this.props.user;
        
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#servicenow-collapse-nav-bar" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">serviceNOW</a>
                    </div>

                    {(loggedInUser.isAuth) ? (
                        <LoggedInMenu handleSignout={(e) => this.handleSignuout(e)} loggedInUser={loggedInUser} />
                    ) : (
                        <div className="collapse navbar-collapse" id="servicenow-collapse-nav-bar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/login">Sign In</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        );
    }
}

export default withRouter(connect(
    (state) => ({user: state.authenticatedUser.user}),
    {signOut}
)(Menubar));