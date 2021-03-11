import {profileReducer} from "./profile-reducer"
import {messagesReducer} from "./messages-reducer"
import {sidebarReducer} from "./sidebar-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "27F3F443-8E82-4C1B-934C-F27F83732102", message: "Hi", likes: 5 },
        {
          id: "27F3F443-8E82-4C1B-934C-F27F83732103",
          message: "I learn ReactJS",
          likes: 666,
        },
        {
          id: "27F3F443-8E82-4C1B-934C-F27F83732104",
          message: "This is my fckn first react pet project!",
          likes: 0,
        },
        {
          id: "27F3F443-8E82-4C1B-934C-F27F83732105",
          message: "Aaaaaw eeeeeee!",
          likes: 12,
        },
        {
          id: "27F3F443-8E82-4C1B-934C-F27F83732106",
          message: "I'm done",
          likes: 25,
        },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber(state) {},
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
    let state = this.getState();

    state.profilePage = profileReducer(state.profilePage, action);
    state.messagesPage = messagesReducer(state.messagesPage, action);
    state.sidebar = sidebarReducer(state.sidebar, action);

    this._callSubscriber(state);
  },
};

export default store;
