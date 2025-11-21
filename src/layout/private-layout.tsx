import Navbar from "../components/common-components/navbar/Navbar"; 
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default PrivateLayout;
