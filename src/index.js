import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { state, addPost, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = ({ state, addPost, updateNewPostText }) => {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>,
  );
};

rerenderEntireTree({ state, addPost, updateNewPostText });

subscribe(rerenderEntireTree);
