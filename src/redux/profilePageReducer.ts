export type PostType = {
    id: string
    message: string
    likeCount: number
}
export type ProfilePagePostsType = {
    posts: Array<PostType>
    newPostText: string
}
export type ProfilePageActionType =
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addPostAC>

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState: ProfilePagePostsType = {
    posts: [
        { id: '1', message: "Hi, what's up?", likeCount: 15 },
        { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
        { id: '3', message: 'Perfect!', likeCount: 8 },
    ],
    newPostText: '',
}

export const profilePageReducer = (
    state: ProfilePagePostsType = initialState,
    action: ProfilePageActionType
): ProfilePagePostsType => {
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
