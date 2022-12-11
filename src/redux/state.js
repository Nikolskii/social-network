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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state chanched');
  },
  addPost() {
    const newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
