import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MainLayout from './components/MainLayout/MainLayout';

const App = ({ usersData, messagesData, postsData }) => {
  return (
    <BrowserRouter>
      <div className={classes.page}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Profile postsData={postsData} />} />
            <Route path="profile" element={<Profile postsData={postsData} />} />
            <Route
              path="dialogs/*"
              element={
                <Dialogs usersData={usersData} messagesData={messagesData} />
              }
            />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
