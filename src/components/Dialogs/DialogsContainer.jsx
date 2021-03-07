import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    messageOnChangeHandler: (newMessage) => {
      dispatch(updateNewMessageActionCreator(newMessage));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
