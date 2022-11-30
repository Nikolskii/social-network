import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* Обернить outlet  */}
      <Outlet />
    </>
  );
};

export default MainLayout;
