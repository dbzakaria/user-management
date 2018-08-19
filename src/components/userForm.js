import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveUser} from '../reducer/user'
import { Button } from 'react-bootstrap'
import {updateCurrentName, updateCurrentUserName, updateCurrentEmail, updateCurrentCity, updateCurrentPhone, updateCurrentWebsite, updateCurrentCo} from '../reducer/user'
import { withRouter } from 'react-router-dom'

class UserForm extends Component {

  handleInputChangeName = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentName(val)
  }

  handleInputChangeUserName = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentUserName(val)
  }

  handleInputChangeEmail = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentEmail(val)
  }

  handleInputChangeCity = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentCity(val)
  }

  handleInputChangePhone = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentPhone(val)
  }

  handleInputChangeWebsite = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentWebsite(val)
  }

  handleInputChangeCo = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentCo(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveUser(this.props.currentUser);
    // this.props.history.push('/');
  }

  render() {


    return (
      <div className="wrapper">

          <form>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Name" onChange={this.handleInputChangeName}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">User name:</label>
              <div className="col-sm-10">
                <input  className="form-control"  placeholder="User Name" onChange={this.handleInputChangeUserName}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-10">
                <input className="form-control" type="email" placeholder="name@example.com" onChange={this.handleInputChangeEmail}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">City:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="City" onChange={this.handleInputChangeCity}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Phone:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Phone" onChange={this.handleInputChangePhone}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Website:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Website" onChange={this.handleInputChangeWebsite}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Company name:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Company name" onChange={this.handleInputChangeCo}/>
              </div>
            </div>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleSubmit}>Save user</Button>
          </form>

      </div>
    )
  }
}

export default withRouter(connect(
  (state) => ({currentUser: state.user.currentUser}),
  {saveUser,updateCurrentName, updateCurrentUserName, updateCurrentEmail, updateCurrentCity, updateCurrentPhone, updateCurrentWebsite, updateCurrentCo}
)(UserForm))
