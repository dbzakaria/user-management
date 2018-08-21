import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers, sortCol, deleteUser} from '../reducer/user'
import { withRouter } from 'react-router-dom'
import './usersList.css'

const TableHeaderCell = ({colName, className, handleSort, sortClassName}) => (
  <div className={className} onClick={handleSort}>
    {colName} <i className={sortClassName}></i>
  </div>
)

const tableHeaders = [
  {key: 'name', value: 'Name', class: 'table-head'},
  {key: 'username', value: 'Username', class: 'table-head'},
  {key: 'email', value: 'Email', class: 'table-head'},
  {key: 'address.city', value: 'City', class: 'table-head'},
  {key: 'phone', value: 'Phone', class: 'table-head'},
  {key: 'company.name', value: 'Company Name', class: 'table-head'},
];

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  handleSort = (evt, name) => {
    evt.preventDefault();
    this.props.sortCol(name);
  }

  handleDelete = (evt, id) => {
    evt.preventDefault();
    this.props.deleteUser(id);
  }

  headerSortClassName = (sort,col) => {
    if (sort.col == col) {
      let className = sort.type === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";
      return className;
    }
    return "fas fa-sort";
  }

  render() {
    const users = this.props.users;
    const sort = this.props.sort;
    return (

      <div className="users-info">
        <h2><i className="fas fa-users"></i>Users</h2>
        <hr/>
        <div className="action-btns">
          <a className="btn btn-primary create-user-btn" href="/createUser"><i className="fas fa-user-plus"></i>Add New User</a>
        </div>
        <div className="table-grid users-table">
          <div className="table-heading">
            <div className="table-row">
              {
                tableHeaders.map((header, key) => 
                  <TableHeaderCell key={key}
                    colName={header.value}
                    className={header.class}
                    handleSort={(e) => this.handleSort(e, header.key)}
                    sortClassName={this.headerSortClassName(sort, header.key)}
                  />
                )
              }
              <div className="table-head text-center">Action</div>
            </div>
          </div>
          <div className="table-body">
            {users.map((user, key) => {
              return <div className="table-row" key={key}>
                <div className="table-cell">{user.name}</div>
                <div className="table-cell">{user.username}</div>
                <div className="table-cell">{user.email}</div>
                <div className="table-cell">{user.address.city}</div>
                <div className="table-cell">{user.phone}</div>
                <div className="table-cell">{user.company.name}</div>
                <div className="table-cell text-center">
                  <button onClick={(e) => this.handleDelete(e, user.id)} className="btn btn-default far fa-trash-alt"></button>
                  <a href={'/editUser/' + user.id} className="btn btn-default fas fa-edit" role="button"></a>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  (state) => ({users: state.user.users, sort: state.user.orderBy, user:state.authenticatedUser.user}),
  {fetchUsers, sortCol, deleteUser}
)(UsersList))
