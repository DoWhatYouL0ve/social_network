import {
    addPostAC,
    deletePostAC,
    ProfilePagePostsType,
    profilePageReducer,
} from './profilePageReducer'

// Start data
let state: ProfilePagePostsType = {
    posts: [
        { id: '1', message: "Hi, what's up?", likeCount: 15 },
        { id: '2', message: "Hello, I'm great and you?", likeCount: 6 },
        { id: '3', message: 'Perfect!', likeCount: 8 },
    ],
    profile: null,
    status: '',
}

test('new post should be added, length of posts incremented', () => {
    // Start data
    let action = addPostAC('new post added')

    // tested element
    let newState = profilePageReducer(state, action)

    // expectations
    expect(newState.posts.length).toBe(4)
})

test('new post message should be correct', () => {
    // Start data
    let action = addPostAC('new post added')

    // tested element
    let newState = profilePageReducer(state, action)

    // expectations
    expect(newState.posts[3].message).toBe('new post added')
})

test('delete post message, posts length should be decremented', () => {
    // Start data
    let action = deletePostAC('1')

    // tested element
    let newState = profilePageReducer(state, action)

    // expectations
    expect(newState.posts.length).toBe(2)
})

test("delete post message with incorrect id, length shouldn't be changed", () => {
    // Start data
    let action = deletePostAC('5')

    // tested element
    let newState = profilePageReducer(state, action)

    // expectations
    expect(newState.posts.length).toBe(3)
})
