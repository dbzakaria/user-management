import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  saveUser,
  updateCurrentName,
  updateCurrentUserName,
  updateCurrentEmail,
  updateCurrentCity,
  updateCurrentPhone,
  updateCurrentCo,
  updateUserById,
  fetchUserById,
  emptyCurrentUser
} from '../reducer/user'
import { withRouter } from 'react-router-dom'
import './userForm.css'

class UserForm extends Component {

  componentDidMount() {
    if (this.isEditing()) {
      this.props.fetchUserById(this.props.match.params.id);
    }
  }

  isEditing = () => {
    return (this.props.match.params.id === undefined)? false : true;
  }

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

  handleInputChangeCo = (evt) => {
    evt.preventDefault()
    const val = evt.target.value
    this.props.updateCurrentCo(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.isEditing()) {
      this.props.updateUserById(this.props.currentUser)
    } else {
      this.props.saveUser(this.props.currentUser);
    }
    this.props.history.push('/users');
  }

  handleCancel = (evt) => {
    evt.preventDefault();
    this.props.emptyCurrentUser();
    this.props.history.push('/users');
  }

  isValidName = () => {
    return this.props.currentUser.name.length > 0 ? true : false;
  }

  isValidUserName = () => {
    if ((this.props.currentUser.username.length > 7) && (/^[a-z0-9]+$/i.test(this.props.currentUser.username))) {
      return true;
    }
    return false;
  }

  isValidEmail = () => {
    if (this.props.currentUser.email !== '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.props.currentUser.email)) {
      return true;
    }

    return false;
  }

  isValidAddressCity = () => {
    return this.props.currentUser.address.city.length > 0 ? true : false;
  }

  isValidPhone = () => {
    return ((this.props.currentUser.phone.length > 7) && (!isNaN(this.props.currentUser.phone))) ? true : false;
  }

  isValidCompanyName = () => {
    return this.props.currentUser.company.name.length > 0 ? true : false;
  }

  canSubmit() {
    if (this.isValidName() && this.isValidUserName() && this.isValidEmail() && this.isValidAddressCity() && this.isValidPhone() && this.isValidCompanyName()) {
      return false
    }

    return true;
  }

  render() {
    const isEnabled = this.canSubmit();

    return (
      <div className="wrapper">
        <h2><i className="fas fa-users"></i>User Form</h2>
        <hr/>
          <form>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Name:</label>
              <div className="col-sm-10">
                <input className="form-control" placeholder="Name" value={this.props.currentUser.name} onChange={this.handleInputChangeName}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">User name:</label>
              <div className="col-sm-10">
                <input  className="form-control" placeholder="User Name" value={this.props.currentUser.username} onChange={this.handleInputChangeUserName}/>
                <span id="helpBlock2" className={this.isValidUserName() ? 'hide' : 'show help-block'}>User name shouldn't have any special characters and of minimum 8</span>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-10">
                <input className="form-control" type="email" placeholder="name@example.com" value={this.props.currentUser.email} onChange={this.handleInputChangeEmail}/>
                <span id="helpBlock2" className={this.isValidEmail() ? 'hide' : 'show help-block'}>Email should be in this format: name@example.com</span>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">City:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="City" value={this.props.currentUser.address.city} onChange={this.handleInputChangeCity}/>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Phone:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Phone" value={this.props.currentUser.phone} onChange={this.handleInputChangePhone}/>
                <span id="helpBlock2" className={this.isValidPhone() ? 'hide' : 'show help-block'}>Phone number should be only numbers of minimum 8</span>
              </div>
            </div>
            <div className="form-group row">
              <label  className="col-sm-2 col-form-label">Company name:</label>
              <div className="col-sm-10">
                <input className="form-control"  placeholder="Company name" value={this.props.currentUser.company.name} onChange={this.handleInputChangeCo}/>
              </div>
            </div>
            <div className="actions">
              <button className="btn btn-primary" onClick={this.handleSubmit} disabled={isEnabled}>Save user </button>
              <button className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>

      </div>
    )
  }
}

export default withRouter(connect(
  (state) => ({currentUser: state.user.currentUser}),
  {saveUser,updateCurrentName, updateCurrentUserName, updateCurrentEmail, updateCurrentCity, updateCurrentPhone, updateCurrentCo, fetchUserById, updateUserById, emptyCurrentUser}
)(UserForm))
