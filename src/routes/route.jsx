import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../compoents/home/Home";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/dashboard/Dashboard";
import Menu from "../pages/ourMenu/Menu";
import Shop from "../pages/ourShop/Shop";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        },
        {
            path:'/menu',
            element:<Menu/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
      ]
    },
  ]);