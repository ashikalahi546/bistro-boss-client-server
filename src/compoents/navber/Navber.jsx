import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact Us", path: "/contact" },
    { id: 3, name: "Dashboard", path: "/dashboard" },
    { id: 4, name: "Our Menu", path: "/menu" },
    { id: 5, name: "Order", path: "/shop" },
  ];
  return (
    <div className=" fixed top-0  xl:w-9/12 lg:w-11/12 w-full  mx-auto z-10">
      <div className="flex md:flex-row flex-col justify-between px-10 md:items-center py-3.5 bg-black/60">
        <div className="text-white ">
          <h3 className="text-2xl font-bold"> BISTRO BOSS</h3>
          <p className="text-xl font-semibold">Restaurant</p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl top-10 font-bold absolute right-5 cursor-pointer"
        >
          {open ? <IoIosCloseCircleOutline /> : <AiOutlineMenuFold />}
        </div>

        <ul
          className={`md:text-white rounded text-gray-500 px-5 pt-3 md:text-lg text-sm flex md:flex-row flex-col absolute md:static right-5 md:items-center md:bg-black/0 bg-white md:pb-0 pb-6 md:gap-4 gap-2 ${
            open ? "top-20  duration-300 delay-500" : "-top-44"
          }`}
        >
          {routes.map((route) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " hover:text-orange-500  duration-150 delay-100 font-medium border-orange-500 border-b"
                  : " hover:text-orange-500  duration-150 delay-100 font-medium border-orange-500 "
              }
              route={route}
              key={route.id}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
