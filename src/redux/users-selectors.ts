import { StateType } from './redux-store'
import { createSelector } from 'reselect'

export const getAllUsers = (state: StateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}

// example of reseletor in work, in this case dependency is getAllUsers and if it change we work with it's return value: users array
export const getUsersSuper = createSelector(getAllUsers, (users) => {
    return users.filter((u) => true)
})
