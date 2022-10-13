import { usersAPI } from '../api/api'
import { Dispatch } from 'redux'
import { updateObjectInArray } from '../utils/objectHelpers'

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

const FOLLOW = 'social_network/users/FOLLOW'
const UNFOLLOW = 'social_network/users/UNFOLLOW'
const SET_USERS = 'social_network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social_network/users/TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'social_network/users/FOLLOWING_IN_PROGRESS'

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
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: true,
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: false,
                }),
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

// common func for thunks follow/unfollow
const followUnfollowFlow = async (
    dispatch: Dispatch,
    userId: string,
    apiMethod: any,
    actionCreator: any
) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

// Thunk creators
export const getUsers =
    (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }

export const followTC = (userId: string) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow)
}

export const unfollowTC = (userId: string) => async (dispatch: Dispatch) => {
    followUnfollowFlow(
        dispatch,
        userId,
        usersAPI.unFollow.bind(usersAPI),
        unfollow
    )
}
