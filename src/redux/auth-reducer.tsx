import { Dispatch } from 'redux'
import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
type ActionType = ReturnType<typeof setAuthUserData>

const initialState: InitialStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload, id: action.payload.userId }
        default:
            return state
    }
}

export const setAuthUserData = (
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
) => {
    return {
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth },
    } as const
}

// Thunk
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login =
    (email: string, password: string, rememberMe: boolean) =>
    (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                //@ts-ignore
                dispatch(getAuthUserData())
            } else {
                // getting capture error message
                let errorServerMessage =
                    response.data.messages.length > 0
                        ? response.data.messages[0]
                        : 'Some error'
                //helps to show error in case email or password is wrong
                dispatch(
                    stopSubmit('login', {
                        _error: errorServerMessage,
                    })
                )
            }
        })
    }

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            //@ts-ignore
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
