let rerenderEntireTree = () => {
  console.log('state chanched');
};

const state = {
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
};

const addPost = () => {
  const newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';

  rerenderEntireTree({ state, addPost, updateNewPostText });
};

const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;

  rerenderEntireTree({ state, addPost, updateNewPostText });
};

const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export { state, addPost, updateNewPostText, subscribe };
