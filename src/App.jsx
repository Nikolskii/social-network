import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Content from './components/Content/Content';

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.page}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <Content />
              </>
            }
          >
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
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

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className={classes.page}>
//         <Header />
//         <Navbar />
//         <div className={classes.content}>
//           <Routes>
//             <Route path="profile" element={<Profile />} />
//             <Route path="dialogs" element={<Dialogs />} />
//             <Route path="news" element={<News />} />
//             <Route path="music" element={<Music />} />
//             <Route path="settings" element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };
