// components/Layout.js
import SideNavbar from './SideNavbar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <SideNavbar />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
