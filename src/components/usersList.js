import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers, sortCol, deleteUser} from '../reducer/user'
import { Container, Grid, Row, Col, code, Button, FormGroup,FormControl, ControlLabel } from 'react-bootstrap'

const TableHeaderCell = ({colName, className, handleSort, sortClassName}) => (
  <div className={className} onClick={handleSort}>
    {colName} <i className={sortClassName}></i>
  </div>
)

const tableHeaders = [
  {key: 'id', value: 'Id', class: 'col-sm-1 col-md-1'},
  {key: 'name', value: 'Name', class: 'col-sm-2 col-md-2'},
  {key: 'username', value: 'Username', class: 'col-sm-2 col-md-2'},
  {key: 'email', value: 'Email', class: 'col-sm-2 col-md-2'},
  {key: 'address.city', value: 'City', class: 'col-sm-1 col-md-1'},
  {key: 'phone', value: 'Phone', class: 'col-sm-2 col-md-2'},
  {key: 'website', value: 'Website', class: 'col-sm-1 col-md-1'},
  {key: 'company.name', value: 'Company Name', class: 'col-sm-1 col-md-1'},
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
      <div className="wrapper">
        <Button bsStyle="primary"> <i className="fas fa-user"></i> Log in</Button>
        <a href="/createUser">Create User</a>
        <div className="users-info">
          <Grid>
            <Row className="headers">
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
            </Row>
            {users.map((user, key) => {
              return <Row  className="show-grid" key={key}>
                <Col sm={1} md={1}><i onClick={(e) => this.handleDelete(e, user.id)} className="fas fa-trash-alt"></i>{user.id} </Col>
                <Col sm={2} md={2}> {user.name} </Col>
                <Col sm={2} md={2}> {user.username} </Col>
                <Col sm={2} md={2}> {user.email} </Col>
                <Col sm={1} md={1}> {user.address.city} </Col>
                <Col sm={2} md={2}> {user.phone} </Col>
                <Col sm={1} md={1}> {user.website} </Col>
                <Col sm={1} md={1}> {user.company.name} </Col>
              </Row>
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({users: state.user.users, sort: state.user.orderBy}),
  {fetchUsers, sortCol, deleteUser}
)(UsersList)
