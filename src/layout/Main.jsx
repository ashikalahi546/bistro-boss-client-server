import { Outlet } from "react-router-dom";
import Navber from "../compoents/navber/Navber";

const Main = () => {
  return (
    <div className="xl:w-9/12 lg:w-11/12  mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
