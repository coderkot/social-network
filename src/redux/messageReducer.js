import {IDGenerator} from "../utils/IDGenerator"

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


export const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText.trim();
            let message = {
                id: IDGenerator(),
                message: newMessage,
                incoming: false
            };

            if (newMessage !== '') {
                state.messages.push(message);
                state.newMessageText = '';
            }
            return state;
        default:
            return state;
    }
}

export const updateNewMessageActionCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessage});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
