import {getUsers, sortUsers, createUser, deleteUserById} from '../lib/userServices'

const initState = {
    users: [],
    currentUser: {
        id: 0,
        name: '',
        username: '',
        email: '',
        city: '',
        address: {},
        phone: '',
        company: ''
    },
    orderBy:  {
        type: 'asc',
        col: ''
    }
}

export const USERS_ADD = 'USERS_ADD'
export const USERS_LOAD = 'USERS_LOAD'
export const DO_SORT = 'DO_SORT'
export const USER_DELETE = 'USER_DELETE'

export const CURRENT_NAME = 'CURRENT_NAME'
export const CURRENT_USERNAME = 'CURRENT_USERNAME'
export const CURRENT_EMAIL = 'CURRENT_EMAIL'
export const CURRENT_CITY = 'CURRENT_CITY'
export const CURRENT_PHONE = 'CURRENT_PHONE'
export const CURRENT_COMPANY = 'CURRENT_COMPANY'

export const updateCurrentName = (val) => ({type:CURRENT_NAME, payload: val})
export const updateCurrentUserName = (val) => ({type:CURRENT_USERNAME, payload: val})
export const updateCurrentEmail = (val) => ({type:CURRENT_EMAIL, payload: val})
export const updateCurrentCity = (val) => ({type:CURRENT_CITY, payload: val})
export const updateCurrentPhone = (val) => ({type:CURRENT_PHONE, payload: val})
export const updateCurrentCo = (val) => ({type:CURRENT_COMPANY, payload: val})

export const loadUsers = (users) => ({type: USERS_LOAD, payload: users})
export const addUser = (user) => ({type: USERS_ADD, payload: user})
export const doSorting = (users, orderBy) => ({type: DO_SORT, payload: users, orderBy: orderBy})
export const deleteFromUsers = (id) => ({type: USER_DELETE, payload: id})


export const fetchUsers = () => {
    return (dispatch) => {
        getUsers()
            .then(users => dispatch(loadUsers(users)))
    }
}

export const saveUser = (user) => {
    return (dispatch) => {
        createUser(user)
            .then(res => {
                dispatch(addUser(res))
            })
    }
}

export const sortCol = (col) => {
    return (dispatch, getState) => {
      // get current orderBy
      const orderBy = getState().user.orderBy;
      let sortBy = "";
      if (orderBy.type === "asc") {
        sortBy = "desc";
      } else {
        sortBy = "asc";
      }

      sortUsers(col, sortBy)
          .then(users => {
              dispatch(doSorting(users, {type: sortBy, col: col}))
          })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        deleteUserById(id)
            .then(() => dispatch(deleteFromUsers(id)))
    }
}

export default (state = initState, action) => {
    switch (action.type) {
    case USERS_ADD:
        return {...state, users: state.users.concat(action.payload)}
    case USERS_LOAD:
        return {...state, users: action.payload}
    case CURRENT_NAME:
        return {...state, currentUser: {...state.currentUser, name: action.payload}}
    case CURRENT_USERNAME:
        return {...state, currentUser: {...state.currentUser, username: action.payload}}
    case CURRENT_EMAIL:
        return {...state, currentUser: {...state.currentUser, email: action.payload}}
    case CURRENT_CITY:
        return {...state, currentUser: {...state.currentUser, address: {...state.currentUser.address, city: action.payload}}}
    case CURRENT_PHONE:
        return {...state, currentUser: {...state.currentUser, phone: action.payload}}
    case CURRENT_COMPANY:
        return {...state, currentUser: {...state.currentUser, company: {...state.currentUser.company, name: action.payload}}}
    case DO_SORT:
        const users = {...state, users: action.payload, orderBy:  {...state.orderBy, type: action.orderBy.type, col: action.orderBy.col}}
        return users;
    case USER_DELETE:
      return {...state,
        users: state.users.filter(u => u.id !== action.payload)
      }
    default:
        return state
    }
}
