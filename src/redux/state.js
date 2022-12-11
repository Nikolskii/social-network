const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello, how are you?', likesCount: 5 },
        { id: 2, message: "It's my first post", likesCount: 0 },
        { id: 3, message: 'Ura ura ura', likesCount: 10 },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;

      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;

      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default store;
window.store = store;
