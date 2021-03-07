import { IDGenerator } from "../utils/IDGenerator";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
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
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newMessage = state.newPostText.trim();
      let post = {
        id: IDGenerator(),
        message: newMessage,
        likes: 0,
      };

      if (newMessage !== "") {
        state.posts.push(post);
        state.newPostText = "";
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (postMessage) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: postMessage,
});
