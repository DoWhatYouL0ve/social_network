import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

type InitialStateType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof setInitialized>

const initialState = {
    initialized: false,
}

export const appReducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}

export const setInitialized = () => {
    return { type: SET_INITIALIZED } as const
}

// Thunk
export const setInitializedTC = () => async (dispatch: any) => {
    await dispatch(getAuthUserData())
    dispatch(setInitialized())
}
