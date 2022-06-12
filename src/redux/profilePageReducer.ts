export type PostType = {
    id: string
    message: string
    likeCount: number
}
export type ProfilePagePostsType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}
export type ProfilePageActionType =
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: '',
    profile: null,
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
                message: state.newPostText,
                likeCount: 0,
            }
            return (copyState = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            })
        }
        case UPDATE_NEW_POST_TEXT:
            return (copyState = { ...state, newPostText: action.newText })
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostTextAC = (newText: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
export const setUserProfile = (profile: ProfileType) =>
    ({ type: SET_USER_PROFILE, profile } as const)
