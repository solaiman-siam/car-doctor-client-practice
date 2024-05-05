import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import NavbarModify from "../pages/NavbarModify";

function MainLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavbarModify></NavbarModify>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
