import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className='bg-blue-400'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
