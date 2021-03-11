const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export const followAC = userID => ({ type: FOLLOW, userID });
export const unfollowAC = userID => ({ type: UNFOLLOW, userID });
export const setUsersAC = users => ({ type: SET_USERS, users });
