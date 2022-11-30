import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className={classes.page}>
      <Header />
      <Navbar />
      <div className={classes.content}>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
};

export default App;
