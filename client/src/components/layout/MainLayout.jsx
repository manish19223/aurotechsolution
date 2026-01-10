import ScrollToTop from "../common/ScrollToTop";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      {/* Page content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
