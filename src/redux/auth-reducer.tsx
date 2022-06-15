const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}
type ActionType = ReturnType<typeof setAuthUserData>

const initialState = {
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
            return { ...state, ...action.data, isAuth: true }
        default:
            return state
    }
}

export const setAuthUserData = (
    userId: number,
    email: string,
    login: string
) => {
    return { type: SET_USER_DATA, data: { userId, email, login } } as const
}
