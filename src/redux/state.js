const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '27F3F443-8E82-4C1B-934C-F27F83732102', message: "Hi", likes: 5},
                {id: '27F3F443-8E82-4C1B-934C-F27F83732103', message: "I learn ReactJS", likes: 666},
                {
                    id: '27F3F443-8E82-4C1B-934C-F27F83732104',
                    message: "This is my fckn first react pet project!",
                    likes: 0
                },
                {id: '27F3F443-8E82-4C1B-934C-F27F83732105', message: "Aaaaaw eeeeeee!", likes: 12},
                {id: '27F3F443-8E82-4C1B-934C-F27F83732106', message: "I'm done", likes: 25},
            ],
            newPostText: ''
        },
        messagesPage: {
            users: [
                {id: '2C2F108A-1005-465B-8590-C3E398E26A91', name: "Yana"},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A92', name: "Dima"},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A93', name: "Ivan"},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A94', name: "Sasha"},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A95', name: "Alex"},
            ],
            messages: [
                {id: '2C2F108A-1005-465B-8590-C3E398E26A96', message: "Hi", incoming: true},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A97', message: "How r ya", incoming: true},
                {
                    id: '2C2F108A-1005-465B-8590-C3E398E26A98',
                    message: "Naf, jst drink a beer, smoke a weed. You?",
                    incoming: false
                },
                {id: '2C2F108A-1005-465B-8590-C3E398E26A99', message: "Fine man.", incoming: true},
                {id: '2C2F108A-1005-465B-8590-C3E398E26A00', message: "Bye!", incoming: true},
            ],
            newMessageText: '',
        },
    },
    _callSubscriber(state) {
    },
    _generateID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // eslint-disable-next-line no-mixed-operators,eqeqeq
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    },
    // get current state
    getState() {
        return this._state;
    },
    // subscribe & call rerender method when state changed
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // evaluate method by action.type
    dispatch(action) {
        if (action.type === ADD_POST) {
            let state = this.getState()
            let newMessage = state.profilePage.newPostText
                .replace(/^\s*/, '')
                .replace(/\s*$/, ''); // delete spaces
            let post = {
                id: this._generateID(),
                message: newMessage,
                likes: 0
            };

            if (newMessage !== '') {
                state.profilePage.posts.push(post);
                this._callSubscriber(this._state);
                state.profilePage.newPostText = '';
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.getState().messagesPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let state = this.getState()
            let newMessage = state.messagesPage.newMessageText
                .replace(/^\s*/, '')
                .replace(/\s*$/, '');
            let message = {
                id: this._generateID(),
                message: newMessage,
                incoming: false
            };

            if (newMessage !== '') {
                state.messagesPage.messages.push(message);
                this._callSubscriber(this._state);
                state.messagesPage.newMessageText = '';
            }
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (postMessage) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: postMessage});

export const updateNewMessageActionCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessage});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export default store;
