import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MainLayout from './components/MainLayout/MainLayout';

const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className={classes.page}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Profile
                state={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="profile"
            element={
              <Profile
                state={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="dialogs/*"
            element={<Dialogs state={state.dialogsPage} />}
          />
          <Route path="news" element={<News />} />
          <Route path="music" element={<Music />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
