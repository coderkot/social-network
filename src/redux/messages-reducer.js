import { IDGenerator } from "../utils/IDGenerator";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  users: [
    { id: "2C2F108A-1005-465B-8590-C3E398E26A91", name: "Yana" },
    { id: "2C2F108A-1005-465B-8590-C3E398E26A92", name: "Dima" },
    { id: "2C2F108A-1005-465B-8590-C3E398E26A93", name: "Ivan" },
    { id: "2C2F108A-1005-465B-8590-C3E398E26A94", name: "Sasha" },
    { id: "2C2F108A-1005-465B-8590-C3E398E26A95", name: "Alex" },
  ],
  messages: [
    {
      id: "2C2F108A-1005-465B-8590-C3E398E26A96",
      message: "Hi",
      incoming: true,
    },
    {
      id: "2C2F108A-1005-465B-8590-C3E398E26A97",
      message: "How r ya",
      incoming: true,
    },
    {
      id: "2C2F108A-1005-465B-8590-C3E398E26A98",
      message: "Naf, jst drink a beer, smoke a weed. You?",
      incoming: false,
    },
    {
      id: "2C2F108A-1005-465B-8590-C3E398E26A99",
      message: "Fine man.",
      incoming: true,
    },
    {
      id: "2C2F108A-1005-465B-8590-C3E398E26A00",
      message: "Bye!",
      incoming: true,
    },
  ],
  newMessageText: "",
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    case SEND_MESSAGE:
      let newMessage = state.newMessageText.trim();
      let message = {
        id: IDGenerator(),
        message: newMessage,
        incoming: false,
      };

      if (newMessage !== "") {
        return {
          ...state,
          newMessageText: "",
          messages: [...state.messages, message],
        };
      }

      return { ...state };
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: newMessage,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
