import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducer/user'
import loginReducer from './reducer/login'
import {loadState, saveState} from './localStorage'

const reducer = combineReducers({
    user: userReducer,
    authenticatedUser: loginReducer
})

// load state from browser localstorage if exits
const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

store.subscribe(() => {
    saveState(store.getState())
})

export default store;