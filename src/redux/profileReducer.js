import {IDGenerator} from "../utils/IDGenerator"

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = state.newPostText.trim();
            let post = {
                id: IDGenerator(),
                message: newMessage,
                likes: 0
            };

            if (newMessage !== '') {
                state.posts.push(post);
                state.newPostText = '';
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (postMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: postMessage});
