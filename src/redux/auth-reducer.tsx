import { Dispatch } from 'redux'
import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA'
const GET_CAPTURE = 'social_network/auth/GET_CAPTURE'

type InitialStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
    capture: string | null
}
type ActionType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setCapture>

const initialState: InitialStateType = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    capture: null,
}

export const authReducer = (
    state: InitialStateType = initialState,
    action: ActionType
): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload, id: action.payload.userId }
        case GET_CAPTURE:
            return { ...state, capture: action.payload.capture }
        default:
            return state
    }
}

// Action creators
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

export const setCapture = (capture: string) =>
    ({
        type: GET_CAPTURE,
        payload: { capture },
    } as const)

// Thunk creators
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login =
    (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: Dispatch) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            //@ts-ignore
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                //@ts-ignore
                dispatch(getCapture())
            }
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
    }

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        //@ts-ignore
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCapture = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCapture()
    const capture = response.data.url
    dispatch(setCapture(capture))
}
