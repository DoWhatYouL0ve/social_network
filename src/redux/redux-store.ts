import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
    Store,
} from 'redux'
import { profilePageReducer } from './profilePageReducer'
import { dialogsPageReducer } from './dialogsPageReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StateType = ReturnType<typeof rootReducer>
export let store: Store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
)
