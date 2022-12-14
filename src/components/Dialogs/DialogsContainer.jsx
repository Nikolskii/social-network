import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onSendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onNewMessageChange}
      onSendMessage={onSendMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
