import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-blue-700">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
