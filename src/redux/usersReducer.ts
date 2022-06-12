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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type UsersActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return state
    }
}

export const follow = (userId: string) => ({ type: FOLLOW, userId } as const)
export const unfollow = (userId: string) =>
    ({ type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UserType>) =>
    ({ type: SET_USERS, users } as const)
export const setCurrentPage = (currentPage: number) =>
    ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount } as const)
export const setToggleIsFetching = (isFetching: boolean) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
