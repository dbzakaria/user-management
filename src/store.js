import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducer/user'
import loginReducer from './reducer/login'
import {loadState, saveState} from './localStorage'
import { throttle } from 'lodash'

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

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

export default store;