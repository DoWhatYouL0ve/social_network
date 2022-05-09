import {
    combineReducers,
    legacy_createStore as createStore,
    Store,
} from 'redux'
import { profilePageReducer } from './profilePageReducer'
import { dialogsPageReducer } from './dialogsPageReducer'

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
})

export type StateType = ReturnType<typeof rootReducer>
export let store: Store = createStore(rootReducer)
