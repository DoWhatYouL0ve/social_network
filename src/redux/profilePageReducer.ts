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
    | ReturnType<typeof setPhotoAC>

const ADD_POST = 'social_network/profilePage/ADD_POST'
const DELETE_POST = 'social_network/profilePage/DELETE_POST'
const SET_USER_PROFILE = 'social_network/profilePage/SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'social_network/profilePage/SET_STATUS_PROFILE'
const SAVE_PHOTO = 'social_network/profilePage/SAVE_PHOTO'

export type ProfilePhotosType = {
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
        { id: '1', message: 'Hi, today is a great day!', likeCount: 15 },
        {
            id: '2',
            message: 'Today we are going to the mountains, check it out!',
            likeCount: 6,
        },
        { id: '3', message: 'Happy birthday!', likeCount: 8 },
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
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    //@ts-ignore
                    photos: action.photo,
                },
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
export const setPhotoAC = (photo: File) =>
    ({ type: SAVE_PHOTO, photo } as const)

//Thunks
export const getUserProfile =
    (userId: number) => async (dispatch: Dispatch) => {
        const response = await ProfileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await ProfileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    const res = await ProfileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
        dispatch(setPhotoAC(res.data.data.photos))
    }
}

export const updateUserStatus =
    (status: string) => async (dispatch: Dispatch) => {
        const response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    }
