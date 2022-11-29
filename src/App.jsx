import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.page}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
