import { usersAPI } from '../api/api'
import { Dispatch } from 'redux'

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
    followingInProgress: Array<string>
}
export type UsersActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof toggleFollowingInProgress>

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(
                          (id) => id != action.userId
                      ),
            }
        default:
            return state
    }
}

// Action creators
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
export const toggleFollowingInProgress = (
    inProgress: boolean,
    userId: string
) => ({ type: FOLLOWING_IN_PROGRESS, inProgress, userId } as const)

// Thunk creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const followTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}

export const unfollowTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unFollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
    }
}
