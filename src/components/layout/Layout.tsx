import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top equal to header height */}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
