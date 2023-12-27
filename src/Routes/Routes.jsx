import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Profile/Profile";
import AllTask from "../Components/AllTask/AllTask";
import CreateTask from "../Components/CreateTask/CreateTask";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <Profile></Profile>  
        },
        {
          path: 'profile',
          element: <Profile></Profile>
        },
        {
          path: 'tasks',
          element: <AllTask></AllTask>
        },
        {
          path: 'create',
          element: <CreateTask></CreateTask>
        }
      ]
    }
  ]);