import { ActionType, ProfilePagePostsType } from './state'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const profilePageReducer = (
    state: ProfilePagePostsType,
    action: ActionType
) => {
    let newPost = {
        id: '4',
        message: state.newPostText,
        likeCount: 0,
    }
    switch (action.type) {
        case ADD_POST:
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({ type: ADD_POST } as const)
export const updateNewPostTextAC = (newText: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText } as const)
