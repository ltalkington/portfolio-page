import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/";
import TopBar from "../TopBar/TopBar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Sidebar />

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
