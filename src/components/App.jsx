import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
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
