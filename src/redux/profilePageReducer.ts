import { Dispatch } from 'redux'
import { ProfileAPI } from '../api/api'

export type PostType = {
    id: string
    message: string
    likeCount: number
}
export type ProfilePagePostsType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}
export type ProfilePageActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusProfile>

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'

type ProfilePhotosType = {
    small: string
    large: string
}
type ProfileContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactType
    photos: ProfilePhotosType
}

let initialState: ProfilePagePostsType = {
    posts: [
        { id: '1', message: "Hi, what's up?", likeCount: 15 },
        { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
        { id: '3', message: 'Perfect!', likeCount: 8 },
    ],
    profile: null,
    status: '',
}

export const profilePageReducer = (
    state: ProfilePagePostsType = initialState,
    action: ProfilePageActionType
): ProfilePagePostsType => {
    let copyState
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '4',
                message: action.newPostText,
                likeCount: 0,
            }
            return (copyState = {
                ...state,
                posts: [...state.posts, newPost],
            })
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((i) => i.id !== action.postId),
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS_PROFILE:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) =>
    ({ type: ADD_POST, newPostText } as const)
const setUserProfile = (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const)
const setStatusProfile = (status: string) =>
    ({ type: SET_STATUS_PROFILE, status } as const)
export const deletePostAC = (postId: string) =>
    ({ type: DELETE_POST, postId } as const)

//Thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    ProfileAPI.getStatus(userId).then((response) =>
        dispatch(setStatusProfile(response.data))
    )
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    ProfileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    })
}
