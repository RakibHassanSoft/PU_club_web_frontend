import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import PublicLeaderboard from "./pages/LeaderBoard/PublicLeaderboard";
import DailyProblemPage from "./pages/GetProblemLevel/DailyProblemPage";
import Resource from "./pages/Resource/Resource";
import DSARoadmap from "./pages/DSARoadmap/DSARoadmap.jsx";
import Course from "./compoents/Course/Course.jsx";
import DSA from "./compoents/Course/DSA/DSA.jsx";
import OurMentors from "./pages/Our mentors/OurMentors.jsx";
import STest from "./pages/STest/STest.jsx";
import LTest from "./pages/LTest/LTest.jsx";
import CTest from "./pages/CTest/CTest.jsx";

import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient'; // Import the queryClient


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { 
        path:'/',
        element:<Home/>,
      },
      { 
        path:'/signup',
        element:<Signup/>,
      },
      { 
        path:'/signin',
        element:<Login/>,
      },
      { 
        path:'/ranking',
        element:<PublicLeaderboard/>,
      },
      { 
        path:'/daily-problems',
        element:<DailyProblemPage/>,
      },
      {
        path: '/',
        children: [
          { path: 'c-test', element: <CTest /> },
          { path: 's-test', element: <STest /> },
          { path: 'l-test', element: <LTest /> },
        ]
      },
      { 
        path:'/resources',
        element:<Resource/>,
      },
      { 
        path:'/mentors',
        element:<OurMentors/>,
      },
      { 
        path:'/roadmap',
        element:<DSARoadmap/>,
      },
      // { 
      //   path:'/courses',
      //   element: <Course/>,
      //   children: [
      //     {
      //         path: 'dsa',
      //         element: <DSA/>,
      //     }
      //   ]
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
);
