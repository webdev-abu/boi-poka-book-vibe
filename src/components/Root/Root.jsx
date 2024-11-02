import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function Root() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-6xl max-sm:mx-3 m-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Root;
