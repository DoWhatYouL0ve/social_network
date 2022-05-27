export type UserPhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: string
    photos: UserPhotosType
    name: string
    followed: boolean
    status: string
}
export type UsersPageType = {
    users: Array<UserType>
}
export type UsersActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

const initialState: UsersPageType = {
    users: [],
}

export const usersReducer = (
    state: UsersPageType = initialState,
    action: UsersActionType
): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: true } : u
                ),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? { ...u, followed: false } : u
                ),
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({ type: FOLLOW, userId } as const)
export const unfollowAC = (userId: string) =>
    ({ type: UNFOLLOW, userId } as const)
export const setUsersAC = (users: Array<UserType>) =>
    ({ type: SET_USERS, users } as const)
