const initState = {
    user: {
        username: '',
        isAuth: false
    }
}

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNOUT = 'USER_SIGNOUT'
export const CURRENT_USERNAME = 'CURRENT_USERNAME'

export const updateUsername = (val) => ({type:CURRENT_USERNAME, payload: val})
export const signIn = (username) => ({type: USER_SIGNIN, payload: username})
export const signOut = () => ({type: USER_SIGNOUT})

export default (state = initState, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {...state, user: {...state.user, username: action.payload, isAuth: true}}
        case USER_SIGNOUT:
            return {...state, user: {...state.user, username: '', isAuth: false}}
        case CURRENT_USERNAME:
            return {...state, user: {...state.user, username: action.payload}}
        default:
            return state
    }
}
