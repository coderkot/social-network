import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/messages-reducer';
import { Messages } from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    messageOnChangeHandler: newMessage => {
      dispatch(updateNewMessageActionCreator(newMessage));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
