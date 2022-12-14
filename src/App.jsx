import { Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MainLayout from './components/MainLayout/MainLayout';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className={classes.page}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Profile store={props.store} />} />
          <Route path="profile" element={<Profile store={props.store} />} />
          <Route
            path="dialogs/*"
            element={<DialogsContainer store={props.store} />}
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
