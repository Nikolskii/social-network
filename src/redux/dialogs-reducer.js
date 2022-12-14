const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  users: [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Leha' },
    { id: 5, name: 'Dima' },
  ],
  messages: [
    { id: 1, message: 'How are you?' },
    { id: 2, message: 'Im fine, thank you' },
    { id: 3, message: 'Good morning' },
    { id: 4, message: 'Hello!' },
  ],
  newMessageText: 'Message',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
