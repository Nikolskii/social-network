import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const usersData = [
  { id: 1, name: 'Denis' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Ivan' },
  { id: 4, name: 'Leha' },
  { id: 5, name: 'Dima' },
];

const messagesData = [
  { id: 1, message: 'How are you?' },
  { id: 2, message: 'Im fine, thank you' },
  { id: 3, message: 'Good morning' },
  { id: 4, message: 'Hello!' },
];

const postsData = [
  { id: 1, message: 'Hello, how are you?', likesCount: 5 },
  { id: 2, message: "It's my first post", likesCount: 0 },
  { id: 3, message: 'Ura ura ura', likesCount: 10 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      usersData={usersData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
